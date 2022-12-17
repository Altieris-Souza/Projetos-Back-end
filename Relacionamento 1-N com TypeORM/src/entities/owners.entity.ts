import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("owners")
class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}

export { Owner };
