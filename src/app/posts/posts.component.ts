import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatHeaderCell, MatCell, MatTable, MatColumnDef, MatCellDef, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRowDef, MatRow } from '@angular/material/table';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    MatHeaderCell,
    MatCell,
    MatTable,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.posts = data;
    });
  }
}

