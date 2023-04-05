import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  create (){}

  getAll (){}

  getOne (){}

  update (){}

  delete (){}

  login (){}

  logout (){}
}
