import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'schedule' },
  { path: 'bmi', pathMatch: 'full', component: BmiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
