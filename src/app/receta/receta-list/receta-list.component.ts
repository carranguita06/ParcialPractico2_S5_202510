import { Component, OnInit } from '@angular/core';
import { Receta } from '../Receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})

export class RecetaListComponent implements OnInit {

  recetas: Array<Receta>= []

  constructor(private recetaservice: RecetaService) { }

  getRecetas(){
    this.recetaservice.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;}

    );
  }
  

  ngOnInit() {
    this.getRecetas();
  }

}
