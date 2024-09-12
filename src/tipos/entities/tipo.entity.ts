import {Column,DeleteDateColumn,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Tipo {
    @PrimaryGeneratedColumn()
    id_tipo : number;

    @Column()
    nombre_tipo : string;

    // @DeleteDateColumn()
    // deletedAt: Date;
}
