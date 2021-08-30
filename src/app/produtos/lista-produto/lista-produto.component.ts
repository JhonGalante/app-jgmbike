import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { Produto } from '../Produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit{

  public produtos: Produto[] = [];
  private categoriaId: string = '';
  public categoriaNome: string = '';

  constructor(private produtoService: ProdutoService, 
              private route: ActivatedRoute, 
              private categoriaService: CategoriasService) 
  { 
      route.params.subscribe(params => this.categoriaId = params['id']);
  }

  ngOnInit(): void {
    if(this.categoriaId === undefined){
      this.produtoService.getProdutosCategorias().subscribe(
        produtos => {
          this.produtos = produtos;
          this.categoriaNome = "Todos os produtos";
        },
        error => {
          console.log(error);
        }
      );

    }else{
      this.produtoService.getProdutosPorCategoria(this.categoriaId).subscribe(
        produtos => {
          this.produtos = produtos;

          this.categoriaService.getCategoriaById(this.categoriaId).subscribe(
            categoria => {
              this.categoriaNome = categoria.nome;
            },
            error => {
              console.log(error);
            }
          );

        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
