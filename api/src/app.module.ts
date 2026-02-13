import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './controllers/cart/cart.module';
import { MoviesModule } from './controllers/movies/movies.module';

@Module({
  imports: [CartModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
