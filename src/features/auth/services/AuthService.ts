import {Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export  class AuthService {
   getCurrentUser() {
     const user  = signal<CurrentUser>({
       email : "alfred@gmail.com",
       firstName : "Nnayelugo",
       lastName : "Obialo",
       id : "00001"
     });
     return user;
   }
}

export interface CurrentUser {
  email: string;
  id:string,
  firstName: string,
  lastName: string,
  profilePictureUrl?: string | null,
}
