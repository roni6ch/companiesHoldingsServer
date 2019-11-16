import { Module } from '@nestjs/common';
import { companiesController } from './companies.controller';
import { CompaniesService } from './companies.service';

@Module({
  imports: [],
  controllers: [companiesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
