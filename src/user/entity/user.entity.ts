import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_account' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Column()
    password: string;
}