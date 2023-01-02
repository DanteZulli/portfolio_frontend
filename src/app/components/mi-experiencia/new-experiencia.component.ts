import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../service/experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreExp, this.descripcionExp);
    this.experienciaService.save(exp).subscribe(
      data => {
        alert("Experiencia creada con éxito");
        this.router.navigate(['']);
      }, err => {
        alert("Error al crear la experiencia");
        this.router.navigate(['']);
      }
    );
  }
}
