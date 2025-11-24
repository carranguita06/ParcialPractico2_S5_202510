import { IngredienteReceta } from './../ingrediente-receta/IngredienteReceta';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from './Ingrediente';
import { Observable } from 'rxjs';
import { RecetaService } from '../receta/receta.service';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  private apiUrl: string = environment.baseUrl + 'ingredientes';

constructor(private http: HttpClient,  private recetaService: RecetaService) { }

getIngredientes(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(this.apiUrl);
  }

getIngrediente(id: Number): Observable<Ingrediente> {
    return this.http.get<Ingrediente>(`${this.apiUrl}/${id}`);
  }


/*

agregarIngredienteAReceta(id: Number): void {
    // Primero obtenemos los datos completos del ingrediente
    this.getIngrediente(id).subscribe({
      next: (ingrediente) => {
        // Una vez tenemos los datos, llamamos a RecetaService con los parámetros necesarios
        this.recetaService.putIngredienteReceta(
          ingrediente.id,
          ingrediente.nombre,
          ingrediente.descripcion,
          ingrediente.calorias
        );
      },
      error: (error) => {
        console.error('Error obteniendo datos del ingrediente:', error);
      }
    });
  } */


}
