import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-mis-estudios',
  templateUrl: './mis-estudios.component.html',
  styleUrls: ['./mis-estudios.component.css']
})
export class MisEstudiosComponent implements OnInit {
    educacion: Educacion[] = [];
    constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
    isLogged = false;

    ngOnInit(): void {
      this.cargarEducacion();
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    }

    cargarEducacion(): void {
        this.educacionS.lista().subscribe(
            data => {
                this.educacion = data;
            },
            err => {
                console.log(err);
            }
        );
    }

    eliminarEducacion(id?: number){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        },
        err => {
          console.log(err);
        }
      );
    }
}
