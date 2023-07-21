import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts = signal<BlogPost[]>([]);
  constructor() { }
}
