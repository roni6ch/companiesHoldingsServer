import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { companiesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CompanySchema } from './companies.model';

@Module({
  imports: [MongooseModule.forFeature([{name:'Company',schema:CompanySchema}])],
  controllers: [companiesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
