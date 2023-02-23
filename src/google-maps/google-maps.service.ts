import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  Client,
  Status,
  TravelMode,
} from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleMapsService extends Client {
  private readonly accessKey = this.configService.get('GOOGLE_MAPS_ACCESS_KEY');
  constructor(private configService: ConfigService) {
    super();
  }

  async getCoordinates(address: {
    origins: string[];
    destinations: string[];
    mode: TravelMode;
  }): Promise<number | undefined> {
    const googleRes = await this.distancematrix({
      params: {
        ...address,
        key: this.accessKey,
      },
    });
    if (googleRes.data.rows[0].elements[0].status !== Status.OK) {
      throw new InternalServerErrorException('Something went wrong');
    }
    return googleRes.data?.rows?.[0]?.elements?.[0]?.distance.value;
  }
}
