import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { ConnectService } from './connect.service';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [
    {
      provide: TestService,
      useClass: TestService,
    },
    {
      provide: 'CONNECT',
      useValue: new ConnectService()
    },
  ],
  exports: [TestService],
})
export class TestModule {

  onModuleInit() {
    console.log(`test module init`);
  }
}
