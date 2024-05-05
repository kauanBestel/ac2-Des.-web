import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = []; 

  constructor() { }

  getUsers(): any[] {

    return this.users;
  }

  addUser(user: any): void {
   
    this.users.push(user);
  }


}
