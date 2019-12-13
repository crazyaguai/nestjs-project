import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getMongoManager  } from 'typeorm';
import {generateId} from '../../lib/utils';
import {User} from '../../entity/user.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}


  async getUser() {
    // const manager = getMongoManager();
    // const user = new User();
    // user.username = 'admin1';
    // const id = generateId();
    // user.id = id;
    // await manager.save(user);
    const users = await this.userRepository.findOne({username: 'admin1'});
    console.log(JSON.stringify(users));
  }
}
