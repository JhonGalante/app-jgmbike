import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { GestaoProdutosComponent } from './gestao-produtos/gestao-produtos.component';
import { GestaoServicosComponent } from './gestao-servicos/gestao-servicos.component';
import { GestaoCategoriasComponent } from './gestao-categorias/gestao-categorias.component';

import { AppModule } from '../app.module';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    GestaoProdutosComponent,
    GestaoServicosComponent,
    GestaoCategoriasComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
