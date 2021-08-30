import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/categorias/Categoria';
import { CategoriasService } from 'src/app/categorias/categorias.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
      this.categoriaService.getCategorias().subscribe(
        categorias => {
          this.categorias = categorias;
        },
        error => {
          console.log(error);
        }
      );
  }

}
