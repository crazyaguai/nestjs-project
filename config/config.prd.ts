import {Config} from '../src/interface/config.interface';
import entities from '../src/entity/index';

const prdConfig: Config = {
  port: Number(process.env.port || 3000),
  mongo: {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test',
    useUnifiedTopology: true,
    entities
  }
};

export default prdConfig;