

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Salary } from './salaryTable.model';
import { Model } from 'mongoose';

@Injectable()
export class SalaryTableService {

  constructor(@InjectModel('SalaryTable') private readonly salaryModel: Model<Salary>) { }

  async getSalaryTable() {
    const salary = await this.salaryModel.find().exec();
    return salary as Salary[];
  }
}
