
export class Person {
  id?: number;

  fullName?: string | null;

  documentTypeId: string;

  document?: string | null;

  expeditionDate?: string | null;

  birthdate?: string | null;

 
  bloodType?: string | null;

  rh?: string | null;

  height?: number | null;

  photo?: string | null;

  socioeconomicStatus?: number | null;

 /*  @Column('enum', { name: 'social_security', nullable: true, enum: SocialSecurity })
  socialSecurity?: SocialSecurity | null;
 */
  active: boolean;

 
}
