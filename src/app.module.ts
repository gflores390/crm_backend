import { Module } from '@nestjs/common';
import { TiposModule } from './tipos/tipos.module';
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({

  imports: [
    TypeOrmModule.forRoot({
      type : 'postgres',
      host : '200.105.164.205',
      port: 5432,
      username: "postgres",
      password: "crm2024_DevPos_",
      database: "crm_psg",
      autoLoadEntities: true,
      synchronize: false,
      
    }),


    TiposModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
