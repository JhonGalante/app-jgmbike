import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "./Produto";

@Injectable()
export class ProdutoService{

    constructor(private http: HttpClient){}

    protected UrlService: string = "https://localhost:44335/api/Produtos"

    getProdutosCategorias(): Observable<Produto[]>{
        return this.http.get<Produto[]>(this.UrlService + '/ProdutosCategorias');
    }

    getProdutosPorId(id: string): Observable<Produto>{
        return this.http.get<Produto>(this.UrlService + "/" + id);
    }

    getProdutosPorCategoria(idCategoria: string): Observable<Produto[]>{
        return this.http.get<Produto[]>(this.UrlService + '/ProdutosPorCategoria/' + idCategoria);
    }
}