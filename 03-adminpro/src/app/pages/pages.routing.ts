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
      {path: 'dashboard', component: DashboardComponent, data: {titulo : 'Dashboard'}},
      { path: '', component: DashboardComponent, data: {titulo : 'Dashboard'} },
      { path: 'dashboard/progress', component: ProgressComponent, data: {titulo : 'ProgressBar'}},
      { path: 'dashboard/grafica1', component: Grafica1Component, data: {titulo: 'Gráficas'} },
      { path: 'dashboard/account-setting', component: AccountSettingsComponent, data: {titulo: 'Account Settings'}},
      { path: 'dashboard/promesas' , component:PromesasComponent, data: {titulo: 'Promesas'}},
      { path: 'dashboard/rxjs' , component:RxjsComponent, data: {titulo: 'RxJs'}},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
