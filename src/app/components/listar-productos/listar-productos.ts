import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './listar-productos.html',
  styleUrls: ['./listar-productos.css']
})

export class ListarProductos implements OnInit {
  mensajeExito: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.mensajeExito = params['mensajeExito'] || null;

      if (this.mensajeExito) {
        setTimeout(() => this.mensajeExito = null, 5000);
      }
    });
  }
}
 