import { Body, Controller, Post } from '@nestjs/common';
import { TripDto } from './dto/trip.dto';
import { TripService } from './trip.service';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}
  @Post()
  create(@Body() tripDto: TripDto) {
    return this.tripService.create(tripDto);
  }
}
