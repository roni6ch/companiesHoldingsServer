import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Modules */
import { CompaniesModule } from './companies/companies.module';
import { EmployeesModule } from './employees/employees.module';
import { SalaryTableModule } from './salaryTable/salaryTable.module';

@Module({
  imports: [CompaniesModule ,EmployeesModule,SalaryTableModule, MongooseModule.forRoot('mongodb://roni6ch:abcde12345@ds047958.mlab.com:47958/companies-holdings')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 