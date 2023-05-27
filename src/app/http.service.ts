import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  /**Pobieramy wszystkie posty */
  getPosts():Observable<Array<Post>>{
  return  this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts')
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
  updatePost(post: Post){}

  /**Usuwamy post */
  deletePost(id: number){
  }

  /**Actualizuemy pola w post */
  changePost(post: Post){

  }
}
