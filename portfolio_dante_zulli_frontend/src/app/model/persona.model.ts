export class persona
{
  id?: number;
  nombre: string;
  apellido: string;

  constructor(nombre: string, apellido: string)
  {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
