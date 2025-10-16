import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto'
import { Router } from '@angular/router'


@Component({
  selector: 'app-crear-producto',
  standalone: true,                                
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-producto.html',
  styleUrls: ['./crear-producto.css']
})
export class CrearProducto implements OnInit {
  productoForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(1)]]
    });
  }

  mensajeExito: string | null = null;
 guardar() {
    if (this.productoForm.valid) {
      
      const PRODUCTO: Producto = new Producto(
        this.productoForm.get('producto')?.value || '',
        this.productoForm.get('categoria')?.value || '',
        this.productoForm.get('ubicacion')?.value || '',
        this.productoForm.get('precio')?.value || 0
      );

      console.log(PRODUCTO);
      this.router.navigate(['/'], { 
      queryParams: { mensajeExito: 'El producto fue registrado con éxito!' }

    });
  } else {
    alert('El formulario no es válido');
  }
}
  }


