import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
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
