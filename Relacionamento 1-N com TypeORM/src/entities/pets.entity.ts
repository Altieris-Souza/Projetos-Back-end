import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Owner } from "./owners.entity";

@Entity("pets")
class Pets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  weight: number;

  @ManyToOne(() => Owner)
  owner: Owner;
}

export { Pets };
