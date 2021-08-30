import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servico } from '../Servico';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-detalhe-servico',
  templateUrl: './detalhe-servico.component.html',
  styleUrls: ['./detalhe-servico.component.css']
})
export class DetalheServicoComponent implements OnInit {

  private servicoId: string = '';
  public servico: Servico = new Servico();

  constructor(private servicoService: ServicosService, private route: ActivatedRoute) { 
    route.params.subscribe(params => this.servicoId = params['id']);
  }

  ngOnInit(): void {
    this.servicoService.getServicoPorId(this.servicoId).subscribe(
      servico => {
        this.servico = servico;      
      },
      error => {
        console.log(error);
      }
    );
  }

  divisao(): number{
    return parseInt(this.servico.preco)/10;
  }

}
