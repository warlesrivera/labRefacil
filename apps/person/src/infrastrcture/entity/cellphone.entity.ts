import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
/* import { Customer, CustomerBranch, Person, UserSecurity } from '@core/entities/';
 */
@Index('cellphone_customer_branch_id_idx', ['customerBranchId'], {})
@Index('cellphone_user_customer_id_idx', ['customerId'], {})
@Index('cellphone_pk', ['id'], { unique: true })
@Index('cellphone_person_id_idx', ['personId'], {})
@Index('cellphone_user_security_id_idx', ['userSecurityId'], {})
@Index('cellphone_uq', ['userSecurityId'], { unique: true })
@Entity('cellphone', { schema: 'GET' })
export class Cellphone {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id?: number;

  @Column('text', { name: 'name' })
  name: string;

  @Column('character varying', { name: 'value', length: 15 })
  value: string;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt?: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'now()',
  })
  updatedAt?: Date;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt?: Date | null;

  @Column('integer', { name: 'person_id', nullable: true })
  personId?: number | null;

  @Column('integer', { name: 'customer_branch_id', nullable: true })
  customerBranchId?: number | null;

  @Column('integer', { name: 'customer_id', nullable: true })
  customerId?: number | null;

  @Column('integer', { name: 'user_security_id', nullable: true })
  userSecurityId?: number | null;

 /*  @ManyToOne(() => CustomerBranch, (customerBranch) => customerBranch.cellphones, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'customer_branch_id', referencedColumnName: 'id' }])
  customerBranch?: CustomerBranch;

  @ManyToOne(() => Customer, (customer) => customer.cellphones, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'customer_id', referencedColumnName: 'id' }])
  customer?: Customer;

  @ManyToOne(() => Person, (person) => person.cellphones, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'person_id', referencedColumnName: 'id' }])
  person?: Person;

  @OneToOne(() => UserSecurity, (userSecurity) => userSecurity.cellphone, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_security_id', referencedColumnName: 'id' }])
  userSecurity?: UserSecurity; */
}
