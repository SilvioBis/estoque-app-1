import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/Produto.Model';


@Component({
  selector: 'app-create-produtos',
  templateUrl: './create-produtos.page.html',
  styleUrls: ['./create-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateProdutosPage implements OnInit {

  titulo= '';
  decricao= '';
  preco= 0;
  nome_imagem= '';

  constructor(private route: Router, private produtosSevice : ProdutosService) { }

  ngOnInit() {
  }

  salvar(){
    if(this.titulo !== ''){
      const produto : Produto = {
        titulo: this.titulo,
        descricao : this.decricao,
        preco : this.preco,
        nome_imagem : this.nome_imagem
      }
      this.produtosSevice.create(produto).subscribe(dados => {
        alert('Produto inserido com sucesso: ' + dados.id)
        // navegação vem aqui
        this.route.navigateByUrl('/lista-produtos');
        //this.route.navigate(['/home']);
      })
      //Nunca colocar a navegação fora... vai voltar sem saber a resposta
    } else {
      alert('Insira um titulo.')
    }
  }

}
