import { Injectable, NotFoundException } from '@nestjs/common';
import { Company } from './companies.model';

@Injectable()
export class CompaniesService {
  companies: Company[] = [];

  addCompany(name: string, branch: string) {
    const companyId = String(+new Date());
    const newCompany = new Company(companyId, name, branch);
    this.companies.push(newCompany);
    return companyId;
  }
  getCompanies() {
    //returning copy of companies array in order not to return the reference of the same variable
    return [...this.companies];
  }
  getCompany(compId: string) {
    const company = this.findCompany(compId)[0];
      return { ...company };
  }

  editCompany(compId: string, name: string, branch: string) {
    const [company,index] = this.findCompany(compId);
    const editedCompany = { ...company };
    if (name){
        editedCompany.name = name;
    }
    if (branch){
        editedCompany.branch = branch;
    }
    this.companies[index] = editedCompany;
    return { ...company };
  }
  deleteCompany(compId: string) {
    const [_,index] = this.findCompany(compId)[1];
    this.companies.splice(+index,1);
  }
  findCompany(compId) : [Company , string] {
    const companyIndex = String(this.companies.findIndex(comp => comp._id === compId));
    const company = this.companies[companyIndex];
    if (!company) {
      throw new NotFoundException('Could not find Company');
    }
    return [company,companyIndex];
  }
}
