import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.page.html',
  styleUrls: ['./alterar-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarClientePage implements OnInit {

  id =  0;
  nome = '';
  email = '';
  senha = '';
  confirmeSenha ='';

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private clienteService: ClientesService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.clienteService.getOne(this.id).subscribe(retorno => {
      this.nome = retorno.nome as string;
      this.email = retorno.email ? retorno.email : '';
    })
  }

  salvar(){
    
  }

}
