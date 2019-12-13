import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import {ConfigService} from './module/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const config: ConfigService = await app.get(ConfigService);
  await app.listen(config.port);

  console.log(`server started on http://127.0.0.1:${config.port}`);
}
bootstrap();
