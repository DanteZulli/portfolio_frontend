import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { Habilidades } from '../../model/habilidades';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  constructor(private habilidadesService: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Habilidades(this.nombre, this.porcentaje);
    this.habilidadesService.save(exp).subscribe(
      data => {
        alert("Habilidad creada con éxito");
        this.router.navigate(['']);
      }, err => {
        alert("Error al crear la Habilidad");
        this.router.navigate(['']);
      }
    );
  }
}
