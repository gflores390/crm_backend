import { Injectable } from '@nestjs/common';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';
import { Tipo } from './entities/tipo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TiposService {
  constructor(
    @InjectRepository(Tipo)
    private tiposRepository: Repository<Tipo>,
  ) {}

  async create(createTipoDto: CreateTipoDto) {
    const tipo = this.tiposRepository.create(createTipoDto);
    return await this.tiposRepository.save(tipo);
  }

  async findAll() {
    return this.tiposRepository.find();
  }

  async findOne(id_tipo: number) {
    return await this.tiposRepository.findOneBy({ id_tipo });
  }

  async update(id: number, updateTipoDto: UpdateTipoDto) {
    return await this.tiposRepository.update(id, updateTipoDto);
  }

  async remove(id: number) {
    return await this.tiposRepository.delete(id);
  }
}
