import { DynamicModule, Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

const config = new ConfigService();

const providers = [
  {
    provide: ConfigService,
    useValue: config
  },
  {
    provide: 'CONFIG',
    useValue: config
  }
];

@Global()
@Module({
  imports: [],
  controllers: [],
  providers,
  exports: providers
})
export class ConfigModule {}