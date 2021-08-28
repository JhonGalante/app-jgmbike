import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
      this.produtoService.getProdutos().subscribe(
        produtos => {
          console.log(produtos);
        },
        error => {
          console.log(error);
        }
      );
  }

}
