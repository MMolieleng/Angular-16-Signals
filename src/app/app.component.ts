import { Component, Signal, computed, signal } from '@angular/core';
import { BlogService } from './services/blog.service';
import { BlogPost } from './models/BlogPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Signal<BlogPost[]> = computed(() => {
    return this.blogService.posts() as BlogPost[];
  });

  selectedPost = signal<BlogPost | null>(null);


  title = 'ng-blog';

  constructor(private blogService: BlogService) {
    blogService.getPosts();
  }

  setSelectedPost(post: BlogPost) {
    console.log({ post })
    this.selectedPost.set(post);
  }


  // numberOfPosts = computed(() => this.posts().length);

  // eff = effect(() => {
  //   console.log(this.posts());
  // });

}
