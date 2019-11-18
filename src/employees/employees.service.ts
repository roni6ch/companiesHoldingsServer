import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './employees.model';
import { Model } from 'mongoose';

@Injectable()
export class EmployeesService {

  constructor(@InjectModel('Employee') private readonly employeeModel: Model<Employee>) { }

  async addEmployee(name: string, branch: string) {
    const newEmployee = new this.employeeModel({ name, branch });
    const employee = await newEmployee.save();
    return employee.id as string;
  }
  async getEmployees() {
    const employees = await this.employeeModel.find().exec();
    return employees as Employee[];
  }
  async getEmployee(employeeId: string) {
    const employee = await this.employeeModel.findById(employeeId);
    return employee;
  }

  async editEmployee(employeeId: string, first_name: string, last_name: string) {
    const employee = await this.findEmployee(employeeId);
    if (first_name) {
        employee.first_name = first_name;
    }
    if (last_name) {
        employee.last_name = last_name;
    }
    //Employee already has id so it will only update the document in the db
    const updated = await employee.save();
    if (updated)
      return true;
    return false;
  }
  async deleteEmployee(employeeId: string) {
    const employee = await this.employeeModel.deleteOne({ _id: employeeId }).exec();
    if (employee.n === 0) {
      throw new NotFoundException('Could not find employee.');
    }
  }
  async findEmployee(employeeId: string): Promise<Employee> {
    let employee;
    try {
      employee = await this.employeeModel.findById(employeeId).exec();
    } catch (error) {
      throw new NotFoundException('Could not find employee');
    }
    if (!employee) {
      throw new NotFoundException('Could not find employee');
    }
    return employee;
  }
}
