import { Injectable, Inject } from '@nestjs/common';
import {ConnectService} from './connect.service';

@Injectable()
export class TestService {
  // @Inject('CONNECT') connect: ConnectService
  constructor(
    @Inject('CONNECT') private connect: ConnectService
  ) {}

  onModuleInit() {
    console.log(`test server init`);
  }

  a = 0;
  getTest(): string {
    return 'this is a test!' + this.a++;
  }
  getConnect(): string {
    return this.connect.getData();
  }
}
