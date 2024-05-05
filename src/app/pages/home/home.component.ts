import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalUsers: number = 0;
  usersByRole: { role: string, count: number }[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.totalUsers = this.userService.getTotalUsers(); // Obtém a quantidade total de usuários
    this.usersByRole = this.userService.getUsersByRole(); // Obtém a contagem de usuários por função
  }
}
