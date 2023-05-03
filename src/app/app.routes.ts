import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lista-produtos',
    loadComponent: () => import('./lista-produtos/lista-produtos.page').then( m => m.ListaProdutosPage)
  },
  {
    path: 'create-cliente',
    loadComponent: () => import('./create-cliente/create-cliente.page').then( m => m.CreateClientePage)
  },
  {
    path: 'create-produtos',
    loadComponent: () => import('./create-produtos/create-produtos.page').then( m => m.CreateProdutosPage)
  },
  {
    path: 'create-produtos',
    loadComponent: () => import('./create-produtos/create-produtos.page').then( m => m.CreateProdutosPage)
  },

];
