import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from '../../model/proyectos';
import { ProyectosService } from '../../service/proyectos.service';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit{
  proyectos: Proyectos = null;
  constructor(private proyectosService: ProyectosService, private activatedRoute: ActivatedRoute,
    private router: Router, public imageService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.detalle(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    this.proyectos.imagenProyecto = this.imageService.url;
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "proyecto_"+ id ;
    this.imageService.uploadImage($event, name);
  }
}
