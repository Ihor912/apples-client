import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplesComponent } from './apples/apples.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ApplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
