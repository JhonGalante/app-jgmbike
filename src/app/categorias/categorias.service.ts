import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  protected UrlService: string = "https://localhost:44335/api/CategoriaProdutos"

  getCategorias() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.UrlService);
  }

  getCategoriaById(id: string) : Observable<Categoria>{
    return this.http.get<Categoria>(this.UrlService + "/" + id);
  }
  
}
