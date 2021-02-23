import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatatableComponent } from './components/datatable/datatable.component';

import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  {path: '', component: LandingPageComponent},

  {path: 'categorias', component: DatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
