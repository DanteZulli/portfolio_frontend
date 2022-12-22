import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from '../../service/proyectos.service';
import { Proyectos } from '../../model/proyectos';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreProyecto: string = '';
  descripcionProyecto: string = '';
  imagenProyecto: string = '';

  constructor(private ProyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const proyecto = new Proyectos(this.nombreProyecto, this.descripcionProyecto, this.imagenProyecto);
    this.ProyectosService.guardar(proyecto).subscribe(
      data => {
        alert("Proyecto creado con éxito");
        this.router.navigate(['']);
      }, err => {
        alert("Error al crear el Proyecto");
        this.router.navigate(['']);
      }
    );
  }
}
