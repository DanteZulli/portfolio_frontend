import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../service/experiencia.service';
import { TokenService } from '../../service/token.service';
import { Experiencia } from '../../model/experiencia';

@Component({
  selector: 'app-mi-experiencia',
  templateUrl: './mi-experiencia.component.html',
  styleUrls: ['./mi-experiencia.component.css']
})
export class MiExperienciaComponent implements OnInit  {
    exp: Experiencia[] = [];
    constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }
    isLogged = false;
    ngOnInit(): void {
      this.cargarExperiencia();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    }

    cargarExperiencia(): void {
      this.experienciaService.lista().subscribe(data => {
        this.exp = data;
      })
    }

    delete(id: number): void {
      this.experienciaService.delete(id).subscribe(data => {
        this.cargarExperiencia();
      }, err =>{
        alert("No se pudo borrar la experiencia");
      }
      )
    }
}

