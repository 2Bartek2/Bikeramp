import { config } from 'dotenv';
config();
export const tripConfig: TripConfig = {
  pricePerKm: +process.env.PRICE,
};

export interface TripConfig {
  pricePerKm: number;
}
