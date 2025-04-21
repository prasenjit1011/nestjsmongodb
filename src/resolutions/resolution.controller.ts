import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ResolutionService } from './resolution.service';
import { ResolutionDTO } from './resolution.dto';

@Controller('resolution')
export class ResolutionController {
  constructor(private readonly resolutionService: ResolutionService) {}

  @Post()
  create(@Body() createResolutionDto: ResolutionDTO) {
    return this.resolutionService.create(createResolutionDto);
  }

  @Get()
  findAll() {
    return this.resolutionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resolutionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResolutionDto: ResolutionDTO) {
    return this.resolutionService.update(id, updateResolutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resolutionService.remove(id);
  }
}
