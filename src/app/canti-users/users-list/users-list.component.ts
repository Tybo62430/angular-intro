import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  token: string | null = null;
  private _users: User[];

  users: User[];
  user: User | null = null;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();    
  }

  loadUsers() {
    this.userService.login().subscribe((res: any) => {
      this.token = res.headers.get('Authorization');  
      this.userService.getAllUsers(this.token).subscribe(
        (users: User[]) => {
          this.users = users;
          this._users = users;
        }
      )    
    })
  }
}