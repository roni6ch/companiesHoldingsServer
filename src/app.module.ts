import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* Modules */
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [CompaniesModule , MongooseModule.forRoot('mongodb://roni6ch:abcde12345@ds047958.mlab.com:47958/companies-holdings')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 