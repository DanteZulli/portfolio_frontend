export class Proyectos {
  id?: number;
  nombreProyecto: string;
  descripcionProyecto: string;
  imagenProyecto: string;

  constructor(nombreProyecto: string, descripcionProyecto: string, imagenProyecto: string) {
    this.nombreProyecto = nombreProyecto;
    this.descripcionProyecto = descripcionProyecto;
    this.imagenProyecto = imagenProyecto;
  }

}
