import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
/* import {
  AlertUser,
  Device,
  Lead,
  LeadHistory,
  Loan,
  LoanApplication,
  Movement,
  Person,
  Term,
  UserApplication,
  UserBusinessRules,
  UserRegister,
  UserSecurity,
  UserSession,
} from '@core/entities/'; */

@Index('user_pk', ['id'], { unique: true })
@Index('user_person_id_idx', ['personId'], {})
@Index('user_uq', ['personId'], { unique: true })
@Entity('user', { schema: 'USR' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id?: number;

  @Column('character varying', { name: 'username', length: 50 })
  username: string;

  @Column('text', { name: 'password' })
  password: string;

  @Column('integer', { name: 'person_id', nullable: true })
  personId?: number | null;
/* 
  @OneToMany(() => AlertUser, (alertUser) => alertUser.user)
  alertUsers?: AlertUser[];

  @OneToMany(() => Device, (device) => device.user)
  devices?: Device[];

  @OneToMany(() => Lead, (lead) => lead.user)
  leads?: Lead[];

  @OneToMany(() => LeadHistory, (leadHistory) => leadHistory.user)
  leadHistories?: LeadHistory[];

  @OneToMany(() => Loan, (loan) => loan.user)
  loans?: Loan[];

  @OneToMany(() => LoanApplication, (loanApplication) => loanApplication.user)
  loanApplications?: LoanApplication[];

  @OneToMany(() => Movement, (movement) => movement.user)
  movements?: Movement[];

  @OneToOne(() => Term, (term) => term.user)
  term?: Term;

  @OneToOne(() => Person, (person) => person.user, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'person_id', referencedColumnName: 'id' }])
  person?: Person;

  @OneToMany(() => UserApplication, (userApplication) => userApplication.user)
  userApplications?: UserApplication[];

  @OneToMany(() => UserBusinessRules, (userBusinessRules) => userBusinessRules.user)
  userBusinessRules?: UserBusinessRules[];

  @OneToMany(() => UserRegister, (userRegister) => userRegister.user)
  userRegisters?: UserRegister[];

  @OneToMany(() => UserSecurity, (userSecurity) => userSecurity.user)
  userSecurities?: UserSecurity[];

  @OneToMany(() => UserSession, (userSession) => userSession.user)
  userSessions?: UserSession[]; */
}
