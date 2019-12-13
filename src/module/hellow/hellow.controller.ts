import { Controller, Get,HttpException,HttpStatus,UsePipes,Query,Body,UseGuards,UseInterceptors  } from '@nestjs/common';
import { HellowService } from './hellow.service';
import { TestService } from '../test/test.service';
import {ValidationPipe} from '../../pipe/validation.pipe'
import {AuthGuard} from '../../guard/auth.guard'
import {LoggingInterceptor} from '../../interceptor/logging.interceptor'
import {User} from '../../decorator/user.decorator'

@Controller()
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class HellowController {
  constructor(
    private readonly hellowService: HellowService,
    private readonly testService: TestService,
  ) {}

  @Get()
  getHello(): string {
    return this.hellowService.getHello();
  }

  @Get('a')
  getA(): string {
    return `${this.hellowService.getHello()} ${this.testService.getTest()}`;
  }

  @Get('user')
  getUser(@User('username') username: string): string {
    console.log('use decorator get username')
    console.log(username)
    return `${this.hellowService.getHello()} ${this.testService.getTest()}`;
  }

  @Get('b')
  @UsePipes(new ValidationPipe())
  getB(@Query() query: any,@Body() data: any): string {
    return `${this.hellowService.getHello()} ${this.testService.getTest()}`;
  }

  @Get('error')
  getError(): never {
    throw new HttpException('error',HttpStatus.FORBIDDEN);
  }
}
