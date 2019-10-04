import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './component/main/main.component';
import { MovieComponent } from './component/movie/movie.component';



const routes: Routes =
  [
    { path : '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main',  component: MainComponent },
    { path: 'movie/:id', component: MovieComponent } 

  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
