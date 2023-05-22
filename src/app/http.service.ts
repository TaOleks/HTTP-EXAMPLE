import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  /**Pobieramy wszystkie posty */
  getPosts(){

  }

  /**pobieramy jeden post podając id */
  getPost(id:number){

  }
  /**Pobieramy wszystkie posty usera podając w parametrze jego userId */
  getPostByUser(userId:number){

  }
  /**Dodajemy nowy post */
  addPost(post: Post){

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
