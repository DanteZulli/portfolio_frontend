import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {
  persona: persona = null;
  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router) { }
  ngOnInit(): void {
    this.personaService.detalle(1).subscribe(
      data => {
        this.persona = data;
      },err => {
        alert("Error al modificar");
        this.router.navigate([""]);
      }
    );
  }
  onUpdate(): void {
    this.personaService.update(1, this.persona).subscribe(
      data => {
        alert("Se modifico con exito");
        this.router.navigate([""]);
      }, err => {
        alert("Error al modificar");
        this.router.navigate([""]);
      });
    }
  uploadImage($event:any){}
}
