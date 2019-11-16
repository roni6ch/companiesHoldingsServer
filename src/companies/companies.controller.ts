import { Controller, Get , Post , Body , Param , Patch , Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class companiesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get('')
  getCompanies(): any {
    return this.companiesService.getCompanies();
  }

  @Get(':_id')
  getCompany(@Param('_id') compId: string): any {
    return this.companiesService.getCompany(compId);
  }

  @Post('')
  addCompany(@Body('name') name: string,@Body('branch') branch: string): any {
    const generatedId = this.companiesService.addCompany(name,branch);
    return { id: generatedId };
  }
  
  @Patch(':_id')
  editCompany(@Param('_id') compId: string,@Body('name') name: string,@Body('branch') branch: string){
    this.companiesService.editCompany(compId,name,branch);
    return null;
  }
  @Delete(':_id')
  deleteCompany(@Param('_id') compId: string){
    this.companiesService.deleteCompany(compId);
    return null;
  }
}
