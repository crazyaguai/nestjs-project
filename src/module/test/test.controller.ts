import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller()
export class TestController {
  constructor(
    private readonly testService: TestService
  ) {}

  onModuleInit() {
    console.log(`test controller init`);
  }

  @Get('test')
  getTest(): string {
    return this.testService.getTest();
  }
  @Get('c')
  getC(): string {
    return this.testService.getConnect();
  }
}
