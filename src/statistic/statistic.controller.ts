import { Controller, Get } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { WeekStatistic } from "./interface/week-statistic.interface";

@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}
  @Get('week')
  weekStatistic() : Promise<{
    totalDistance: string,
    totalPrice: string
  }> {
    return this.statisticService.weekStatistic();
  }
  @Get('month')
  monthStatistic() : Promise<{
    day: string,
    totalDistance: string,
    avgRide: string,
    avgPrice: string
  }[]>{
    return this.statisticService.monthStatistic();
  }
}
