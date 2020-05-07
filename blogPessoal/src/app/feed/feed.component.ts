import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { postagem } from '../model/postagem';
import { Local } from 'protractor/built/driverProviders';


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
alerta:boolean = false

titulo:string


  constructor(private postagemService:PostagemService) { }

  ngOnInit(): void {
    this.findAllPostagens()


    let item:string = localStorage.getItem('delOk')
    if(item == "true"){
      this.alerta = true
      localStorage.clear()

      setTimeout(()=>{

        location.assign('/feed')
      }, 5000)

    }
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
}pesquisarPorTitulo(){
  this.postagemService.findByTitulo(this.titulo).subscribe((resp:postagem[])=>{
    this.listaPostagens = resp
  })
}

}
