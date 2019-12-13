import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import {TestService} from './test.service';

@Controller()
export class TestController {
  constructor(
    @Inject('CONFIG') private config: ConfigService,
    private testService: TestService
  ) {}

  @Get('test')
  async getTest(): Promise<number> {
    await this.testService.getUser();
    return this.config.port;
  }
}
