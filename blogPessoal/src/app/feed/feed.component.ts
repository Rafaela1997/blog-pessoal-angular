import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { postagem } from '../model/postagem';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

listaPostagens:postagem[]
postagem: postagem = new postagem

  constructor(private postagemService:PostagemService) { }

  ngOnInit(): void {
    this.findAllPostagens()
  }

findAllPostagens(){
  this.postagemService.getAllPostagens().subscribe((resp: postagem[])=>{
this.listaPostagens = resp
  })
}
publicar(){
  this.postagemService.postPostagem(this.postagem).subscribe((resp: postagem)=>{
    this.postagem = resp
   location.assign('/feed')
  })
}
}
