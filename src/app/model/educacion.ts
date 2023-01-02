export class Educacion {
  id?: number;
  nombreEdu: string;
  fechaEdu: string;
  descripcionEdu: string;

  constructor(nombreEdu: string, fechaEdu: string, descripcionEdu: string) {
    this.nombreEdu = nombreEdu;
    this.fechaEdu = fechaEdu;
    this.descripcionEdu = descripcionEdu;
  }
}
