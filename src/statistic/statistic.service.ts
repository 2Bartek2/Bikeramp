import { Injectable } from '@nestjs/common';
import { TripService } from '../trip/trip.service';
import { MonthStatistic } from './interface/month-statistic.interface';
import { WeekStatistic } from './interface/week-statistic.interface';
import * as moment from 'moment';

@Injectable()
export class StatisticService {
  constructor(private readonly tripService: TripService) {}
  async weekStatistic(): Promise<{}> {
    const data = await this.tripService.weekStatistic();
    return data.map((oneDayStat: WeekStatistic) => {
      return {
        totalDistance: `${oneDayStat.totalDistance} KM`,
        totalPrice: `${oneDayStat.totalPrice} PLN`,
      };
    });
  }

  async monthStatistic(): Promise<{}> {
    const data = await this.tripService.monthStatistic();
    return data.map((oneDayStat: MonthStatistic) => {
      return {
        day: moment(oneDayStat.day).format('MMM, Do'),
        totalDistance: `${oneDayStat.totalDistance} km`,
        avgRide: `${oneDayStat.avgRide} KM`,
        avqPrice: `${oneDayStat.avgPrice} PLN`,
      };
    });
  }
}
