import { Entity, Column, ObjectIdColumn, ObjectID, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export type statusType = 'active' | 'disabled' | 'registering' | 'registerfail';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  mobile: string;

  @Column()
  mail: string;

  @Column({
    enum: [ 'active', 'disabled', 'registering', 'registerfail' ],
  })
  status: statusType = 'active';

  @CreateDateColumn()
  createTime: Date;

  @Column()
  lastLoginTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}