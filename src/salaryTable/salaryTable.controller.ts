
import { Controller, Get , Post , Body , Param , Patch , Delete } from '@nestjs/common';
import { SalaryTableService } from './salaryTable.service';

@Controller('salaryTable')
export class SalaryTableController {
  constructor(private readonly salaryTableService: SalaryTableService) {}

  @Get('')
  async getSalaryTable() {
    return this.salaryTableService.getSalaryTable();
  }
}
