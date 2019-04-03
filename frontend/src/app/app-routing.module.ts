import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';

const routes: Routes = [

  
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'addpost',
    component: AddDataComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
  
})
export class AppRoutingModule { }
