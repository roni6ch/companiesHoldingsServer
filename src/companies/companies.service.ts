import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './companies.model';
import { Model } from 'mongoose';

@Injectable()
export class CompaniesService {

  constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) { }

  async addCompany(name: string, branch: string) {
    const newCompany = new this.companyModel({ name, branch });
    const company = await newCompany.save();
    return company.id as string;
  }
  async getCompanies() {
    const companies = await this.companyModel.find().exec();
    return companies as Company[];
  }
  async getCompany(compId: string) {
    const company = await this.companyModel.findById(compId);
    return company;
  }

  async editCompany(compId: string, name: string, branch: string) {
    const company = await this.findCompany(compId);
    if (name) {
      company.name = name;
    }
    if (branch) {
      company.branch = branch;
    }
    //company already has id so it will only update the document in the db
    company.save();
  }
  async deleteCompany(compId: string) {
    const company = await this.companyModel.deleteOne({ _id: compId }).exec();
    if (company.n === 0) {
      throw new NotFoundException('Could not find Company.');
    }
  }
  async findCompany(compId: string): Promise<Company> {
    let company;
    try {
      company = await this.companyModel.findById(compId).exec();
    } catch (error) {
      throw new NotFoundException('Could not find Company');
    }
    if (!company) {
      throw new NotFoundException('Could not find Company');
    }
    return company;
  }
}
