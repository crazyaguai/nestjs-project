import { Injectable } from '@nestjs/common';
import baseConfig from '../../../config/config.default';
import devConfig from '../../../config/config.dev';
import prdConfig from '../../../config/config.prd';
import {Config} from '../../interface/config.interface';
const SERVER_ENV = process.env.SERVER_ENV || 'dev';

function getConfig(env) {
  if (env === 'dev') {
    return Object.assign(baseConfig, devConfig);
  } else if (env === 'prd') {
    return Object.assign(baseConfig, prdConfig);
  }
}

const config = getConfig(SERVER_ENV);

@Injectable()
export class ConfigService extends Config {
  constructor() {
    super();
    return config;
  }
}

export {config};
