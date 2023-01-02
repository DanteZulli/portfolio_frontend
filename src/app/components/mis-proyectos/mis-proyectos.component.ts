import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import { Proyectos } from '../../model/proyectos';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];
  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectosService.lista().subscribe(data => {
      this.proyectos = data;
    })
  }

  delete(id: number): void {
    this.proyectosService.delete(id).subscribe(data => {
      this.cargarProyectos();
    }, err =>{
      alert("No se pudo borrar la experiencia");
    }
    )
  }
}
