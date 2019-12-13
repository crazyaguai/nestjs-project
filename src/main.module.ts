import { Module } from '@nestjs/common';
import {config} from './module/config/config.service';

import {ConfigModule} from './module/config/config.module';
import {TestModule} from './module/test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(config.mongo),
    TestModule,
  ]
})
export class MainModule {
}
