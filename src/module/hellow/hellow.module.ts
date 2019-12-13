import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { HellowController } from './hellow.controller';
import { HellowService } from './hellow.service';

import {TestModule} from '../test/test.module';
import {ConfigModule} from '../config/config.module';
import {LoggerMiddleware} from '../../middleware/logger.middleware';

@Module({
  imports: [TestModule, ConfigModule.register()],
  controllers: [HellowController],
  providers: [
    HellowService,
    // {
    //   provide: HellowService,
    //   useValue: {
    //     getHello: ()=>{
    //       return 'user value hellow'
    //     }
    //   }
    // },
  ],
})
export class HellowModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'a', method: RequestMethod.GET },
      )
      .forRoutes('');
  }
}
