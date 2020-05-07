import { Component, OnInit } from '@angular/core';
import { postagem } from '../model/postagem';
import { PostagemService } from '../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  postagem:postagem = new postagem
  delOk:boolean = false

  constructor(private postagemService:PostagemService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp:postagem)=>{
      this.postagem = resp
    }, err=>{
      console.log(`Erro: ${err.status}, não conseguimos achar esse Id`)
  })
  }

    btnSim(){
      this.postagemService.deletePostagem(this.postagem.id).subscribe(()=>{
        this.delOk = true
        this.router.navigate(['/feed'])
        localStorage.setItem("delOk", this.delOk.toString())
      })
    }
    btnNao(){
      this.router.navigate(['/feed'])
    }

}
