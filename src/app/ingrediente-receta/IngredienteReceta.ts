import { Ingrediente } from "../ingrediente/Ingrediente";

export class IngredienteReceta{
    ingrediente: Ingrediente;
    cantidad: number


  constructor(
    ingrediente: Ingrediente,
    cantidad: number,

  ){
    this.ingrediente= ingrediente;
    this.cantidad= cantidad
  }
}
