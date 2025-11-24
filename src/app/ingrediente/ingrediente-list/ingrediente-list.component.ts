import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../Ingrediente';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css']
})
export class IngredienteListComponent implements OnInit {

  ingredientes: Array<Ingrediente>= [];

  constructor(private ingredienteService: IngredienteService) { }

  getIngredientes() {
    this.ingredienteService.getIngredientes().subscribe((ingredientes) => {
      this.ingredientes = ingredientes;}

    );
  }
  /*
  agregarIngredienteAReceta(ingrediente: Ingrediente): void {
    this.ingredienteService.agregarIngredienteAReceta(ingrediente.id);
  } */

  ngOnInit() {
    this.getIngredientes();
  }

}
