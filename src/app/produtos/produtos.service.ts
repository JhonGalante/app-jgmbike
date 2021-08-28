import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService{

    constructor(private http: HttpClient){}

    protected UrlService: string = "https://localhost:44335/api/Produtos"

    getProdutos(): Observable<any[]>{
        return this.http.get<any[]>(this.UrlService + '/ProdutosCategorias');
    }
}