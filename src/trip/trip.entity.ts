import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 256 })
  start: string;
  @Column({ length: 256 })
  finish: string;
  @Column({type:'float'})
  distance : number
  @Column({type:'float'})
  pricePerKm: number
  @Column({type:'float'})
  tripPrice: number
  @CreateDateColumn()
  createAt : Date
  @UpdateDateColumn()
  updateAt : Date
}
