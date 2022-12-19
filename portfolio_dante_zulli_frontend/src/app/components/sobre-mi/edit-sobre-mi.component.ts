import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css'],
})
export class EditSobreMiComponent implements OnInit {
  persona: Persona = null;
  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router) {}
  ngOnInit(): void {
    this.personaService.detalle(1).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    this.personaService.update(1, this.persona).subscribe(
      (data) => {
        alert('Se modifico con exito');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }
}
