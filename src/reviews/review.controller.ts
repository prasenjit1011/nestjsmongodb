import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDTO } from './review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: ReviewDTO) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: ReviewDTO) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}
