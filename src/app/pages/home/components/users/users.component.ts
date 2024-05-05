import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = []; 

  constructor(
    private router: Router,
    private userService: UserService 
  ) { }

  ngOnInit(): void {
    
    this.users = this.userService.getUsers(); 
  }

  editUser(userId: number): void {
    this.router.navigate(['/edit-user', userId]);
  }

  deleteUser(userId: number): void {
   
    this.userService.deleteUser(userId); 
   
    this.users = this.userService.getUsers(); 
  }

  addUser(): void {
    
    this.router.navigate(['/add-user']);
  }
}
