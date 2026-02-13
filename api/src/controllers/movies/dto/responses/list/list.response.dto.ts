import { ApiProperty } from '@nestjs/swagger';
import { MovieItemResponseDto } from './movie-item.response.dto';
import { IsArray, IsDefined } from 'class-validator';

export class MoviesListResponseDto {
  @ApiProperty({ type: [MovieItemResponseDto] })
  @IsArray()
  @IsDefined()
  items: MovieItemResponseDto[];
}
