import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/Produto.Model';

@Component({
  selector: 'app-alterar-produtos',
  templateUrl: './alterar-produtos.page.html',
  styleUrls: ['./alterar-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarProdutosPage implements OnInit {
  id =  0;
  titulo= '';
  descricao= '';
  preco= 0;
  nome_imagem= '';

  constructor(private activatedRoute: ActivatedRoute, private route: Router,private produtosService: ProdutosService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.produtosService.getOne(this.id).subscribe(retorno => {
      this.titulo      = retorno.titulo as string;
      this.descricao    = retorno.descricao ? retorno.descricao : '';
      this.preco       = retorno.preco? retorno.preco : 0;
      this.nome_imagem = retorno.nome_imagem? retorno.nome_imagem : '';
    })
  }

  salvar(){
    const produto : Produto = {
      id: this.id,
      titulo: this.titulo,
      descricao: this.descricao,
      preco : this.preco,
      nome_imagem : this.nome_imagem
    }

      this.produtosService.update(produto).subscribe(dados => {
        alert('Produto Alterado com sucesso: ' + dados.id)
        // navegação vem aqui
        this.route.navigateByUrl('/lista-produtos');
        //this.route.navigate(['/home']);
      })
      //Nunca colocar a navegação fora... vai voltar sem saber a resposta
  }

}
