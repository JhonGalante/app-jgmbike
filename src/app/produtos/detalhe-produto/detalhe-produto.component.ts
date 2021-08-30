import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { Produto } from '../Produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  private produtoId: string = '';
  public produto: Produto = new Produto();
  public categoriaNome: string = '';

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriasService, private route: ActivatedRoute) { 
      route.params.subscribe(params => this.produtoId = params['id']);
  }

  ngOnInit(): void {
    this.produtoService.getProdutosPorId(this.produtoId).subscribe(
      produto => {
        this.produto = produto;
        this.categoriaService.getCategoriaById(this.produto.categoriaId).subscribe(
          categoria => {
            this.categoriaNome = categoria.nome;
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  divisao(): number{
    return parseInt(this.produto.preco)/10;
  }

}
