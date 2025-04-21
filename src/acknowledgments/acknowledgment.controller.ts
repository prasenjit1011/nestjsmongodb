import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AcknowledgmentService } from './acknowledgment.service';
import { AcknowledgmentDTO } from './acknowledgment.dto';

@Controller('acknowledgment')
export class AcknowledgmentController {
  constructor(private readonly acknowledgmentService: AcknowledgmentService) {}

  @Post()
  create(@Body() createAcknowledgmentDto: AcknowledgmentDTO) {
    return this.acknowledgmentService.create(createAcknowledgmentDto);
  }

  @Get()
  findAll() {
    return this.acknowledgmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acknowledgmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcknowledgmentDto: AcknowledgmentDTO) {
    return this.acknowledgmentService.update(id, updateAcknowledgmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acknowledgmentService.remove(id);
  }
}
