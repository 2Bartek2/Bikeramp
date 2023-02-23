import { Module } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { StatisticController } from './statistic.controller';
import { TripModule } from '../trip/trip.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from '../trip/trip.entity';

@Module({
  providers: [StatisticService],
  controllers: [StatisticController],
  imports: [TripModule],
})
export class StatisticModule {}
