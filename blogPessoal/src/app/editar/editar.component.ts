import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { postagem } from '../model/postagem';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  postagem: postagem = new postagem 

  constructor(private postagemService:PostagemService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'] 
    this.findById(id)
  }

  findById(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: postagem)=>{
      this.postagem = resp
    })
  }
  salvar(){
    this.postagemService.putPostagem(this.postagem).subscribe((resp:postagem)=>{
      this.postagem = resp
      this.router.navigate(['/feed'])
      location.assign('/feed')
    })
  }
}
