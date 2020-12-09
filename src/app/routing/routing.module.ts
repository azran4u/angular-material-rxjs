import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationSmartComponent } from '../navigation/smart/navigation-smart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NavigationSmartComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class RoutingModule {}
