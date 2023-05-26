import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTTP-EXAMPLE';
  constructor (private httpService: HttpService) {}

  getPosts() {
this.httpService.getPosts().subscribe(posts =>{
  console.log(posts)
})
  }
getPost(){

}
getPostByUser() {

}
addPost() {
const post:Post = ({
  userId: 1,
  id: null,
  title:'Mój post',
  body: 'Pirwszy post o angularze!'
})
}
updatePost() {
const p: Post = ({
  userId: 1,
  id: 1,
  title:'sunt aut facere repellat provident occaecati expecturi op[tio reprehenderit',
  body: 'owy wpis'
})
}
deletePost() {

}
changePost() {
  const p: Post = ({
    id: 1,
    body: 'zmieniam tylko wpis',
  })
}

}

export interface Post{
  userId?: number,
  id?: number|null,
  title?:string,
  body?: string
}
