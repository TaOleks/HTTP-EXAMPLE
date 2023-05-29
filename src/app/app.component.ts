import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPosts$: Observable<Array<Post>> | undefined
  constructor(private httpService: HttpService) { }

  getPosts() {
    this.allPosts$ = this.httpService.getPosts()
  }

  getPost() {
    this.httpService.getPost(2).subscribe(post => {
      console.log(post)
    })
  }
  getPostByUser() {
    this.httpService.getPostByUser(3).subscribe(postsByUser => {
      console.log(postsByUser)
    })
  }
  addPost() {
    const p: Post = {
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'Pirwszy post o angularze!'
    }
    this.httpService.addPost(p).subscribe(post => {
      console.log(post)
    })
  }
  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati expecturi op[tio reprehenderit',
      body: 'nowy post'
    })
    this.httpService.updatePost(p).subscribe(post => {
      console.log(post)
    })
  }
  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post)
    })
  }
  changePost() {
    const p: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis',
    })
    this.httpService.changePost(p).subscribe(post => {
      console.log(post)
    })
  }

}

export interface Post {
  userId?: number,
  id?: number | null,
  title?: string,
  body?: string
}
