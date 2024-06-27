import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prismaService: PrismaService) {}
  async create(createEventDto: CreateEventDto): Promise<void> {
    await this.prismaService.event.create({
      data: { ...createEventDto, date: new Date(createEventDto.date) },
    });
  }

  findAll() {
    return this.prismaService.event.findMany();
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({ where: { id } });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    await this.prismaService.event.update({
      data: { ...updateEventDto, date: new Date(updateEventDto.date) },
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
