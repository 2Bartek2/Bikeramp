import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/database.config';
import { TripModule } from './trip/trip.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { StatisticModule } from './statistic/statistic.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(TypeOrmConfig),
    TripModule,
    GoogleMapsModule,
    StatisticModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
