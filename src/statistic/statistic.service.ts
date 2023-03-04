import { Injectable } from '@nestjs/common';
import { TripService } from '../trip/trip.service';
import { MonthStatistic } from './interface/month-statistic.interface';
import { WeekStatistic } from './interface/week-statistic.interface';
import * as moment from 'moment';

@Injectable()
export class StatisticService {
  constructor(private readonly tripService: TripService) {}
  async weekStatistic(): Promise<{
    totalDistance: string,
    totalPrice: string
  }> {
    const [data] = await this.tripService.weekStatistic();

      return {
        totalDistance: `${data.totalDistance} KM`,
        totalPrice: `${data.totalPrice} PLN`,
      }
    ;
  }

  async monthStatistic(): Promise<{
    day: string,
    totalDistance: string,
    avgRide: string,
    avgPrice: string
  }[]> {
    const data = await this.tripService.monthStatistic();
    return data.map((oneDayStat: MonthStatistic) => {
      return {
        day: moment(oneDayStat.day).format('MMM, Do'),
        totalDistance: `${oneDayStat.totalDistance} KM`,
        avgRide: `${oneDayStat.avgRide} KM`,
        avgPrice: `${oneDayStat.avgPrice} PLN`,
      };
    });
  }
}
