import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 256 })
  start: string;
  @Column({ length: 256 })
  finish: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  distance: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  pricePerKm: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  tripPrice: number;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
}
