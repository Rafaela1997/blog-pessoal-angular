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

putPostagem(Postagem: postagem){
return this.http.put('http://31.220.57.14:8080/postagens', postagem)
}

getByIdPostagem(id:number){
  return this.http.get(`http://31.220.57.14:8080/postagens/${id}`)
}

deletePostagem(id:number){
  return this.http.delete(`http://31.220.57.14:8080/postagens/${id}`)
}

findByTitulo(titulo:string){
  return this.http.get(`http://31.220.57.14:8080/postagens/titulo/${titulo}`)
}

}