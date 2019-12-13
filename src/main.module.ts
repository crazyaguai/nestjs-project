import { Module } from '@nestjs/common';
import {HellowModule} from './module/hellow/hellow.module'
import {TestModule} from './module/test/test.module';
import {ConfigModule} from './module/config/config.module'

@Module({
  imports: [HellowModule,TestModule,ConfigModule.register()]
})
export class MainModule {
}
