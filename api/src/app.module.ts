import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './controllers/cart/cart.module';
import { MoviesModule } from './controllers/movies/movies.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CartModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
