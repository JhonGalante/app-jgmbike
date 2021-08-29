import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetalheProdutoComponent } from './produtos/detalhe-produto/detalhe-produto.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ListaServicosComponent } from './produtos/lista-servicos/lista-servicos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'detalhe-produto/:id', component: DetalheProdutoComponent },
  { path: 'servicos', component: ListaServicosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
