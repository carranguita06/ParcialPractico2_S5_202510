
export class Ingrediente{

    id: Number;
    nombre: string;
    descripcion: string;
    calorias: number;
    imagen: string;

    constructor(
        id: Number,
        nombre: string,
        descripcion: string,
        calorias: number,
        imagen: string

    ){
        this.id= id;
        this.nombre= nombre;
        this.descripcion= descripcion;
        this.calorias= calorias;
        this.imagen= imagen

    }

}
