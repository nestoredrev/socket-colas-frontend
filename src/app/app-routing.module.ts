import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaColasComponent } from './pages/pantalla-colas/pantalla-colas.component';
import { NuevoTicketComponent } from './pages/nuevo-ticket/nuevo-ticket.component';
import { HomeComponent } from './pages/home/home.component';


const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pantalla', component: PantallaColasComponent },
  { path: 'nuevoTiket', component: NuevoTicketComponent },
  { path: '**', component: HomeComponent }, // 404 
  { path: '', pathMatch: 'full', redirectTo: 'home' } // default
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
