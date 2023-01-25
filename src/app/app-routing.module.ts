import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservaComponent } from "./reserva/reserva.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { LoginComponent } from "./login/login.component";
import { Page_not_foundComponent } from './page_not_found/page_not_found.component';
import { ListacompraComponent } from './listacompra/listacompra.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add/:id', component: CarritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listacompra', component: ListacompraComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: '**', component: Page_not_foundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }