import { Routes } from '@angular/router';
import { ListarProductos } from './components/listar-productos/listar-productos';
import { CrearProducto } from './components/crear-producto/crear-producto';

export const routes: Routes = [
    { path:'', component:ListarProductos},
    { path:'crear-producto', component:CrearProducto},
    { path:'editar-proyecto', component: CrearProducto},
    { path:'**', redirectTo:'', pathMatch:'full'}
];
