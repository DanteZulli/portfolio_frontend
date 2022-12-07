import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../service/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from '../../model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css'],
})
export class NewEducacionComponent implements OnInit {
  nombreEdu: string;
  fechaEdu: string;
  descripcionEdu: string;
  constructor(private educacionS: EducacionService, private router: Router) {}

  ngOnInit() {}
  onCreate(): void {
    const edu = new Educacion(this.nombreEdu, this.fechaEdu, this.descripcionEdu);
    this.educacionS.guardar(edu).subscribe(
      data => {
        alert("Educacion creada con éxito");
        this.router.navigate(['']);
      }, err => {
        alert("Error al crear la educacion");
        this.router.navigate(['']);
      }
    );
  }
}
