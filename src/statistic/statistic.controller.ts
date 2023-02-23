import { Controller, Get } from '@nestjs/common';
import { StatisticService } from './statistic.service';

@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}
  @Get('week')
  weekStatistic() {
    return this.statisticService.weekStatistic();
  }
  @Get('month')
  monthStatistic() {
    return this.statisticService.monthStatistic();
  }
}
