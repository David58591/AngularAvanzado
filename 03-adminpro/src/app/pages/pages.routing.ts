import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      { path: '', component: DashboardComponent },
      { path: 'dashboard/progress', component: ProgressComponent },
      { path: 'dashboard/grafica1', component: Grafica1Component },
      { path: 'dashboard/account-setting', component: AccountSettingsComponent},
      { path: 'dashboard/promesas' , component:PromesasComponent},
      { path: 'dashboard/rxjs' , component:RxjsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
