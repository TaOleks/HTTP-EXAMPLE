import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
private postsObs = new BehaviorSubject<Array<Post>>([])
posts$ = this.postsObs.asObservable()

  constructor(private http:HttpClient) {
    this.getPosts()
  }

  /**Pobieramy wszystkie posty */
  getPosts(){
  return  this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe(
    posts =>{
      this.postsObs.next(posts)
    },
    err =>{
      console.log(err)
    }
  );

  }

  /**pobieramy jeden post podając id */
  getPost(id:number):Observable<Post>{
  return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
  }
  /**Pobieramy wszystkie posty usera podając w parametrze jego userId */
  getPostByUser(userId:number):Observable<Array<Post>>{
    const parm = new HttpParams().set('userId', userId +'')
  return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params:parm})
  }
  /**Dodajemy nowy post */
  addPost(post: Post):Observable<Post>{
   return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post)
  }
  /**Aktualizujemy/Podmieniamy post */
  updatePost(post: Post):Observable<Post>{
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post)
  }

  /**Usuwamy post */
  deletePost(id: number){
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  /**Actualizuemy pola w post */
  changePost(post: Post){
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, post)
  }
}
