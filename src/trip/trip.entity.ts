import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 256 })
  start: string;
  @Column({ length: 256 })
  finish: string;
}
