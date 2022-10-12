import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1Component } from './level1/level1.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'level1'},
  {path: 'level1', component: Level1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
