import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({ unique: true, length: 100 })
  /*   @IsEmail() */
  email: string;

  @Column({ unique: true, length: 100 })
  password: string;

  @Column({ unique: true, length: 100 })
  password_secret: string;
}
