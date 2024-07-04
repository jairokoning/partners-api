import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpotsService } from './spots.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';

@Controller('events/:eventId/spots')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() createSpotDto: CreateSpotDto,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.create({ ...createSpotDto, eventId });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':id')
  findOne(@Param('eventId') eventId: string, @Param('id') id: string) {
    return this.spotsService.findOne(eventId, id);
  }

  @Patch(':id')
  update(
    @Param('eventId') eventId: string,
    @Param('id') id: string,
    @Body() updateSpotDto: UpdateSpotDto,
  ) {
    return this.spotsService.update(eventId, id, updateSpotDto);
  }

  @Delete(':id')
  remove(@Param('eventId') eventId: string, @Param('id') id: string) {
    return this.spotsService.remove(eventId, id);
  }
}
