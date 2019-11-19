import { Controller, Get , Post , Body , Param , Patch , Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('')
  async getEmployees() {
    return this.employeesService.getEmployees();
  }

  @Post('')
  async addEmployee(@Body('first_name') first_name: string,@Body('last_name') last_name: string,
  @Body('tz_id') tz_id: number,@Body('role') role: string,
  @Body('company') company: string,@Body('manager') manager: boolean,
  @Body('experience') experience: number,@Body('salary') salary: number) {
    const generatedId = await this.employeesService.addEmployee(first_name,last_name,tz_id,role,company,manager,experience,salary);
    return { id: generatedId };
  }

  @Patch(':_id')
  async editEmployee(@Param('_id') employeeId: string,@Body('first_name') first_name: string,@Body('last_name') last_name: string,
  @Body('tz_id') tz_id: number,@Body('role') role: string,
  @Body('company') company: string,@Body('manager') manager: boolean,
  @Body('experience') experience: number,@Body('salary') salary: number){
    return this.employeesService.editEmployee(employeeId,first_name,last_name,tz_id,role,company,manager,experience,salary);
  }
  
  @Get(':_id')
  async getEmployee(@Param('_id') employeeId: string) {
    return this.employeesService.getEmployee(employeeId);
  }

  
  @Delete(':_id')
  async deleteEmployee(@Param('_id') employeeId: string){
    const deleteEmployee = await this.employeesService.deleteEmployee(employeeId);
    return deleteEmployee;
  }
}
