import { Controller, Get , Post , Body , Param , Patch , Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('')
  async getEmployees() {
    return this.employeesService.getEmployees();
  }

  @Get(':_id')
  async getEmployee(@Param('_id') employeeId: string) {
    return this.employeesService.getEmployee(employeeId);
  }

  @Post('')
  async addEmployee(@Body('name') name: string,@Body('branch') branch: string) {
    const generatedId = await this.employeesService.addEmployee(name,branch);
    return { id: generatedId };
  }
  
  @Patch(':_id')
  async editEmployee(@Param('_id') employeeId: string,@Body('name') name: string,@Body('branch') branch: string){
    return this.employeesService.editEmployee(employeeId,name,branch);
  }
  @Delete(':_id')
  async deleteEmployee(@Param('_id') employeeId: string){
    this.employeesService.deleteEmployee(employeeId);
    return null;
  }
}
