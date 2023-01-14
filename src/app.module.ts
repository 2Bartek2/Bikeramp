import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(TypeOrmConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
