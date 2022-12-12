import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { Habilidades } from '../../model/habilidades';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit{
  hab: Habilidades = null;
  constructor(private habilidadesService: HabilidadesService, private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesService.detail(id).subscribe(
      data =>{
        this.hab = data;
      }, err => {
        alert("Error al modificar Habilidades");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesService.update(id, this.hab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Habilidades");
        this.router.navigate(['']);
      }
    );
  }
}
