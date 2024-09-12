import {IsString} from "class-validator";

export class CreateTipoDto {
    @IsString()
    nombre_tipo : string
}
