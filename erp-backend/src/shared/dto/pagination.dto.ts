import { IsString, IsNotEmpty } from 'class-validator';

export class PaginationDto {
    @IsString()
    @IsNotEmpty()
    page?: number = 1;

    @IsString()
    @IsNotEmpty()
    limit?: number = 10;
}
