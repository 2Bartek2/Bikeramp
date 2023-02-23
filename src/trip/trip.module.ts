import { Module } from '@nestjs/common';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from './trip.entity';
import { GoogleMapsService } from '../google-maps/google-maps.service';
import { GoogleMapsModule } from '../google-maps/google-maps.module';

@Module({
  imports: [TypeOrmModule.forFeature([Trip]), GoogleMapsModule],
  controllers: [TripController],
  providers: [TripService, GoogleMapsService],
  exports: [TripService],
})
export class TripModule {}
