import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from './Servico';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  protected UrlService: string = "https://localhost:44335/api/Servicos";

  getServicos(): Observable<Servico[]>{
      return this.http.get<Servico[]>(this.UrlService);
  }

  getServicoPorId(id: string): Observable<Servico>{
    return this.http.get<Servico>(this.UrlService + "/" + id);
  }
}
