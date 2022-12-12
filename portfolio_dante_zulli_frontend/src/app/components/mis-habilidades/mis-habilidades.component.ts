import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-mis-habilidades',
  templateUrl: './mis-habilidades.component.html',
  styleUrls: ['./mis-habilidades.component.css']
})
export class MisHabilidadesComponent implements OnInit {
  hab: Habilidades[] = [];
  constructor(private habilidadesService: HabilidadesService, private tokenService: TokenService) { }
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
      this.habilidadesService.lista().subscribe(data => {
        this.hab = data;
      })
    }

    delete(id: number): void {
      this.habilidadesService.delete(id).subscribe(data => {
        this.cargarExperiencia();
      }, err =>{
        alert("No se pudo borrar la experiencia");
      }
      )
    }

}
