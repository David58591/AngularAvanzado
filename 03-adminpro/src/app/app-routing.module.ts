import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [

  {path: ' ', redirectTo: 'dashboard'},
  { path: '**', component: NopagefoundComponent },
];



@NgModule({
  declarations: [],
  imports: [
    PagesRoutingModule,
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
