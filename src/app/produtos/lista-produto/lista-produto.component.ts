import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
      this.produtoService.getProdutosCategorias().subscribe(
        produtos => {
          this.produtos = produtos;
          //console.log(this.produtos);
        },
        error => {
          console.log(error);
        }
      );
  }

}
