import { Controller, Get , Post , Body , Param , Patch , Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class companiesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get('')
  async getCompanies() {
    return this.companiesService.getCompanies();
  }

  @Get(':_id')
  async getCompany(@Param('_id') compId: string) {
    return this.companiesService.getCompany(compId);
  }

  @Post('')
  async addCompany(@Body('name') name: string,@Body('branch') branch: string) {
    const generatedId = await this.companiesService.addCompany(name,branch);
    return { id: generatedId };
  }
  
  @Patch(':_id')
  async editCompany(@Param('_id') compId: string,@Body('name') name: string,@Body('branch') branch: string){
    return this.companiesService.editCompany(compId,name,branch);
  }
  @Delete(':_id')
  async deleteCompany(@Param('_id') compId: string){
    this.companiesService.deleteCompany(compId);
    return null;
  }
}
