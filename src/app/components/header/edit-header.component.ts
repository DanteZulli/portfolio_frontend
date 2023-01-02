import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from '../../service/persona.service';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css'],
})
export class EditHeaderComponent implements OnInit {
  persona: Persona = null;
  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService
  ) {}
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
    this.persona.img = this.imageService.url;
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
  uploadImage($event: any) {
    this.imageService.uploadImage($event, "perfil");
  }
}
