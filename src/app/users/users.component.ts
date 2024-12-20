import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatColumnDef, MatTable, MatHeaderCell, MatCell, MatHeaderRow, MatHeaderRowDef, MatHeaderCellDef, MatCellDef, MatRow, MatRowDef } from '@angular/material/table';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatColumnDef,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatHeaderCellDef,
    MatCellDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      this.users = data;
    });
  }
}

