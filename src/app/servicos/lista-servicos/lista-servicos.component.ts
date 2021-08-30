import { Component, OnInit } from '@angular/core';
import { Servico } from '../Servico';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.css']
})
export class ListaServicosComponent implements OnInit {

  public servicos: Servico[] = [];  
  constructor(private servicoService: ServicosService) { }

  ngOnInit(): void {
    this.servicoService.getServicos().subscribe(
      servicos => {
        this.servicos = servicos;
        console.log(this.servicos);
      },
      error => {
        console.log(error);
      }
    );
  }

}
