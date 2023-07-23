import { Injectable, signal } from '@angular/core';
import { BlogPost } from '../models/BlogPost';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  public posts = signal<BlogPost[]>([]);

  constructor(private http: HttpClient) {
  }

  public getPosts() {
    this.http.get<BlogPost[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: data => {
        this.posts.set(data);
      },
      error: error => {
        console.error(error);
      }
    });
  }

  public getPost(id: number) {
    return this.posts().find(post => post.id === id);
  }

  public addPost(post: BlogPost) {
    this.posts().push(post);
  }

  deletePost(id: number) {
    this.posts().splice(id, 1);
  }
}
