export type Ind = true | false
export enum size {S = 0, M = 0, L = 0, XL = 0, XXL = 0, XXXL = 0}

export interface IPeople {
  cod_people: number
  cod_user: number
  _token: string
  firstName: string
  middleName: string
  lastName: string
  photoProfile: string
  photoBackground: string
  gender: string
  age: number
  birthDate: Date
  createdAtPeople: string
  updatedAtPeople: string
}
export interface IappSettings{
  cod_setting:number
  nam_setting:string
  dat_setting:string
  ins_setting:Ind
  createdAtSetting:string;
  updatedAtSetting:string;
}
export interface IUser {
  cod_user: number
  email: string
  userName: string
  password: string
  email_recovery: string
  verifiedEmail: Ind
  ind_usr: Ind
  ins_usr: Ind
  createdAtUser: string
  updatedAtUser: string
}