import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighChartComponent } from './Componants/high-chart/high-chart.component';
import { UsersComponent } from './Componants/users/users.component';

const routes: Routes = [

  {
    path:'',component:HighChartComponent
  },
  {
    path:'user',component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
