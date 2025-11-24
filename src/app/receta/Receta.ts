import { IngredienteReceta } from './../ingrediente-receta/IngredienteReceta';


export class Receta{

    id: Number;
    caloriasTotales: number;
    ingredientes: IngredienteReceta[]

    constructor(
        id: Number,
        caloriasTotales: number,
        ingredientes: IngredienteReceta[]
    ){
        this.id= id;
        this.caloriasTotales= caloriasTotales;
        this.ingredientes= ingredientes
    }

    


}
