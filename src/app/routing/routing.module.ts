import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GithubSmartComponent } from '../github/smart/github-smart/github-smart.component';
import { HomeComponent } from '../home/home/home.component';
import { NavigationSmartComponent } from '../navigation/smart/navigation-smart.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationSmartComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class RoutingModule {}
