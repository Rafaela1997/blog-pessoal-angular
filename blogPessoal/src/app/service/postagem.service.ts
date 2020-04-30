import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postagem } from '../model/postagem';


@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

/*CRUD- create(post),read(get),update(put) e delete(delete)*/
getAllPostagens(){
  return this.http.get('http://31.220.57.14:8080/postagens')
}

postPostagem(Postagem: postagem){
return this.http.post('http://31.220.57.14:8080/postagens', Postagem)
}

}
