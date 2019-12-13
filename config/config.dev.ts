
import {Config} from '../src/interface/config.interface';
import entities from '../src/entity/index';

const devConfig: Config = {
  port: 3000,
  mongo: {
    type: 'mongodb',
    host: '10.20.95.14',
    port: 27117,
    database: 'ask',
    useUnifiedTopology: true,
    entities,
  },
  // mongo: {
  //   type: 'mongodb',
  //   host: '127.0.0.1',
  //   port: 27017,
  //   database: 'test',
  //   useUnifiedTopology: true,
  //   entities,
  // },
};

export default devConfig;