import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TripDto } from './dto/trip.dto';
import { Trip } from './trip.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoogleMapsService } from "../google-maps/google-maps.service";
import { TravelMode } from "@googlemaps/google-maps-services-js";
import { pricePerKm } from "../config/price.config";

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(Trip)
    private readonly tripRepository: Repository<Trip>,
    private readonly googleMapsService: GoogleMapsService,

  ) {}
  async create({ start, finish }: TripDto) {
    const distance = await this.googleMapsService.getCoordinates({
      origins: [start],
      destinations: [finish],
      mode: TravelMode.bicycling
    })
    if (!distance) {
      throw new BadRequestException('Distance Not Found')
    }
    const distanceInKm = distance / 1000
    const price = pricePerKm.price
    const tripPrice = +(distanceInKm*price).toFixed(2)
    console.log(distanceInKm)
    const trip = await this.tripRepository.create({ start, finish, distance:distanceInKm, pricePerKm:price, tripPrice });
    if (!trip) {
      throw new NotFoundException('Trip doesnt exist');
    }
    return this.tripRepository.save(trip);
  }
}
