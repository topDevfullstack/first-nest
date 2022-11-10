import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatssModule } from './catss/catss.module';

@Module({
  imports: [CatssModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
