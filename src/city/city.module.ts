import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CacheModule } from 'src/cache/cache.module';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';
import { CityController } from './city.controller';

@Module({
  imports: [CacheModule, TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
