export interface IRegistrationModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  retypePassword: string;
}

export const registrationModel: IRegistrationModel = {
  email : '',
  firstName : '',
  lastName : '',
  password : '',
  retypePassword : ''
}
