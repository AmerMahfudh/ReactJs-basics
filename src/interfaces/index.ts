export interface IUserData{
  username: string,
  email: string,
  address: string,
  password: string,
  fullName:string,
}

export interface IFormInput{
  label: string,
  type: string,
  id: string,
  name:keyof IUserData,
}









