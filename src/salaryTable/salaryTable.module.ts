import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalaryTableController } from './salaryTable.controller';
import { SalaryTableService } from './salaryTable.service';
import { SalaryTableSchema } from './salaryTable.model';

@Module({
  imports: [MongooseModule.forFeature([{name:'SalaryTable',schema:SalaryTableSchema}])],
  controllers: [SalaryTableController],
  providers: [SalaryTableService],
})
export class SalaryTableModule {}
