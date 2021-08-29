import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    //this.produtoService.getProdutosPorId();
  }

}
