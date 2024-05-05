import { Injectable } from '@angular/core';

interface UserCounts {
  [role: string]: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [
    { id: 1, name: 'Usuário 1', role: 'Engenheiro de FE' },
    { id: 2, name: 'Usuário 2', role: 'Engenheiro de BE' },
    { id: 3, name: 'Usuário 3', role: 'Analista de dados' },
    { id: 4, name: 'Usuário 4', role: 'Líder Técnico' },
    // Adicione mais usuários conforme necessário
  ];

  constructor() { }

  getUsers(): any[] {
    return this.users;
  }

  getTotalUsers(): number {
    return this.users.length;
  }

  getUsersByRole(): { role: string, count: number }[] {
    const counts: UserCounts = {};
    for (const user of this.users) {
      counts[user.role] = counts[user.role] ? counts[user.role] + 1 : 1;
    }
    return Object.keys(counts).map(role => ({ role, count: counts[role] }));
  }
}
