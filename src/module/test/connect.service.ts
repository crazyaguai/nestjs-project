import { Injectable } from '@nestjs/common';

@Injectable()
export class ConnectService {
  getData(): string {
    return 'this is CONNECT';
  }
}
