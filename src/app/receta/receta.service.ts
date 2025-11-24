import { IngredienteReceta } from '../ingrediente-receta/IngredienteReceta';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from './Receta';
import { IngredienteService } from '../ingrediente/ingrediente.service';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private apiUrl: string = environment.baseUrl + 'recetas';


 constructor(private http: HttpClient) { }

 getRecetas(): Observable<Receta[]> {
     return this.http.get<Receta[]>(this.apiUrl);
   }

  getReceta(id: Number): Observable<Receta> {
      return this.http.get<Receta>(`${this.apiUrl}/${id}`);
    }

 putIngredienteReceta(id: Number,nombre:string, descripcion: string, calorias: number) {
  // Primero verificamos si el ingrediente existe en la receta

  this.http.get<Receta["ingredientes"]>(`${this.apiUrl}/${id}`).subscribe({
    next: (ingredientes) => {

      const ingredienteExistente = ingredientes.find((ing: any) => ing.id === id);

      if (ingredienteExistente) {
        // INGREDIENTE EXISTE - Incrementar cantidad
        const nuevaCantidad = ingredienteExistente.cantidad + 1;
        const nuevasCaloriasTotales = calorias * nuevaCantidad;

        const ingredienteActualizado = new IngredienteReceta(
          id,
          nombre,
          descripcion,
          nuevaCantidad,
          nuevasCaloriasTotales
        );

        this.http.put<Receta["ingredientes"]>(`${this.apiUrl}/${id}`, ingredienteActualizado).subscribe({
          next: () => console.log('Ingrediente actualizado'),
          error: (error) => console.error('Error actualizando:', error)
        });

      } else {
        // INGREDIENTE NO EXISTE - Crear nuevo

        const nuevoIngrediente = new IngredienteReceta(
          id,
          nombre,
          descripcion,
          1, // cantidad inicial
          calorias, // calorias por unidad que vienen por parámetro
        );

        this.http.post<Receta["ingredientes"]>(this.apiUrl, nuevoIngrediente).subscribe({
          next: () => console.log('Nuevo ingrediente creado'),
          error: (error) => console.error('Error creando:', error)
        });
      }
    },
    error: (error) => {
      // Si el GET falla (404), significa que el ingrediente NO existe
      if (error.status === 404) {
        // INGREDIENTE NO EXISTE - Crear nuevo
        const nuevoIngrediente = new IngredienteReceta(
          id,
          nombre,
          descripcion,
          1, // cantidad inicial
          calorias, // calorias por unidad
        );

        this.http.post<Receta["ingredientes"]>(this.apiUrl, nuevoIngrediente).subscribe({
          next: () => console.log('Nuevo ingrediente creado'),
          error: (error) => console.error('Error creando:', error)
        });
      } else {
        console.error('Error verificando ingrediente:', error);
      }
    }
  });
}

}
