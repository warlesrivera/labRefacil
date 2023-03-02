import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cellphone } from './cellphone.entity';

@Index('person_academic_level_id_idx', ['academicLevelId'], {})
@Index('person_city_of_birth_id_idx', ['cityOfBirthId'], {})
@Index('person_country_of_birth_id_idx', ['countryOfBirthId'], {})
@Index('document_uq', ['document', 'documentTypeId'], { unique: true })
@Index('person_document_type_id_idx', ['documentTypeId'], {})
@Index('person_pk', ['id'], { unique: true })
@Index('person_marital_status_id_idx', ['maritalStatusId'], {})
@Entity('person', { schema: 'PRS' })
export class Person {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id?: number;

  @Column('text', { name: 'full_name', nullable: true })
  fullName?: string | null;

  @Column('character varying', { name: 'document_type_id', length: 3 })
  documentTypeId: string;

  @Column('text', { name: 'document', nullable: true })
  document?: string | null;

  @Column('date', { name: 'expedition_date', nullable: true })
  expeditionDate?: string | null;

  @Column('text', { name: 'birthdate', nullable: true })
  birthdate?: string | null;

  @Column('character varying', {
    name: 'blood_type',
    nullable: true,
    length: 2,
  })
  bloodType?: string | null;

  @Column('character', { name: 'rh', nullable: true, length: 1 })
  rh?: string | null;

  @Column('double precision', { name: 'height', nullable: true, precision: 53 })
  height?: number | null;

  @Column('text', { name: 'photo', nullable: true })
  photo?: string | null;

  @Column('smallint', { name: 'socioeconomic_status', nullable: true })
  socioeconomicStatus?: number | null;

 /*  @Column('enum', { name: 'social_security', nullable: true, enum: SocialSecurity })
  socialSecurity?: SocialSecurity | null;
 */
  @Column('boolean', { name: 'active', default: () => 'true' })
  active: boolean;

  @Column('timestamp without time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'now()',
  })
  createdAt?: Date | null;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    nullable: true,
    default: () => 'now()',
  })
  updatedAt?: Date | null;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt?: Date | null;

  @Column('integer', { name: 'country_of_birth_id', nullable: true })
  countryOfBirthId?: number | null;

  @Column('integer', { name: 'city_of_birth_id', nullable: true })
  cityOfBirthId?: number | null;

  @Column('text', { name: 'city_of_birth_text', nullable: true })
  cityOfBirthText?: string | null;

  @Column('text', { name: 'email', nullable: true })
  email?: string | null;

  @Column('integer', { name: 'marital_status_id', nullable: true })
  maritalStatusId?: number | null;

  @Column('integer', { name: 'academic_level_id', nullable: true })
  academicLevelId?: number | null;

  @Column('text', { name: 'name', nullable: true })
  name?: string | null;

  @Column('text', { name: 'last_name', nullable: true })
  lastName?: string | null;

  @Column('character', { name: 'gender', nullable: true, length: 1 })
  gender?: string | null;

  @Column('smallint', { name: 'number_of_children', nullable: true })
  numberOfChildren?: number | null;

  /* @OneToMany(() => Cellphone, (cellphone) => cellphone.person)
  cellphones?: Cellphone[]; */

/*   @OneToOne(() => GeoLocation, (geoLocation) => geoLocation.person)
  geoLocation?: GeoLocation;

  @ManyToOne(() => AcademicLevel, (academicLevel) => academicLevel.people, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  }) */
/*   @JoinColumn([{ name: 'academic_level_id', referencedColumnName: 'id' }])
  academicLevel?: AcademicLevel;

  @ManyToOne(() => City, (city) => city.people2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'city_of_birth_id', referencedColumnName: 'id' }])
  cityOfBirth?: City;
 */
/*   @ManyToOne(() => Country, (country) => country.people, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'country_of_birth_id', referencedColumnName: 'id' }])
  countryOfBirth?: Country;

  @ManyToOne(() => DocumentType, (documentType) => documentType.people, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  }) */
  @JoinColumn([{ name: 'document_type_id', referencedColumnName: 'id' }])
  documentType?: DocumentType;
/* 
  @ManyToOne(() => MaritalStatus, (maritalStatus) => maritalStatus.people, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'marital_status_id', referencedColumnName: 'id' }])
  maritalStatus?: MaritalStatus;

  @OneToOne(() => PersonCompliance, (personCompliance) => personCompliance.person)
  personCompliance?: PersonCompliance;

  @OneToMany(() => PersonDocument, (personDocument) => personDocument.person)
  personDocuments?: PersonDocument[];

  @OneToOne(() => User, (user) => user.person)
  user?: User;

  @OneToMany(() => PersonValidation, (personValidation) => personValidation.person)
  personValidations?: PersonValidation[]; */
}
