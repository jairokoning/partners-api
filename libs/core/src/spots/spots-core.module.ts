import { Module } from '@nestjs/common';
import { SpotsService } from './spots.service';

@Module({
  exports: [SpotsService],
  providers: [SpotsService],
})
export class SpotsCoreModule {}
