import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaServicosComponent } from './servicos/lista-servicos/lista-servicos.component';
import { DetalheProdutoComponent } from './produtos/detalhe-produto/detalhe-produto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetalheServicoComponent } from './servicos/detalhe-servico/detalhe-servico.component';
import { ServicosService } from './servicos/servicos.service';
import { CategoriasService } from './categorias/categorias.service';
@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    ListaServicosComponent,
    DetalheProdutoComponent,
    PageNotFoundComponent,
    DetalheServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService,
    ServicosService,
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
