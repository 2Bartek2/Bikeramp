import { Injectable } from '@nestjs/common';
import { Client } from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleMapsService extends Client {
  private readonly accessKey = this.configService.get('GOOGLE_MAPS_ACCESS_KEY');
  constructor(private configService: ConfigService) {
    super();
  }

  async getCoordinates(address: { origins; destinations; mode }) {
    const googleRes = await this.distancematrix({
      params: {
        ...address,
        key: this.accessKey,
      },
    });
    const distance = googleRes?.data?.rows[0]?.elements[0]?.distance?.value
    return distance
  }
}
