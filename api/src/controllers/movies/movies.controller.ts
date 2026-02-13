import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { MoviesService } from 'src/services/movie/movie.service';
import { MoviesListResponseDto } from './dto/responses/list/list.response.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('list')
  @ApiResponse({ status: 200, type: MoviesListResponseDto })
  list() {
    return this.moviesService.getAll();
  }
}
