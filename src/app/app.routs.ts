import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UpdatesComponent } from './blog/user/components/updates/updates.component';
import { GithubSmartComponent } from './github/smart/github-smart/github-smart.component';
import { LoginSmartComponent } from './login/login-smart/login-smart.component';
import { LogoutControllerComponent } from './login/logout-controller/logout-controller.component';
import { NgrxParentComponent } from './ngrx-tutorial/ngrx-parent/ngrx-parent.component';
import { RxjsTutorialComponent } from './rxjs-tutorial/rxjs-tutorial/rxjs-tutorial.component';
import { UserSmartComponent } from './user/user-smart/user-smart.component';
import { ParentComponent } from './view-encapsulation-tutorial/parent/parent.component';

export const ROUTES: Routes = [
  {
    path: 'github',
    pathMatch: 'full',
    component: GithubSmartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    pathMatch: 'full',
    component: UserSmartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginSmartComponent,
  },
  {
    path: 'logout',
    pathMatch: 'full',
    component: LogoutControllerComponent,
  },
  {
    path: 'viewEncapsulationTutorial',
    pathMatch: 'full',
    component: ParentComponent,
  },
  {
    path: 'rxjs',
    pathMatch: 'full',
    component: RxjsTutorialComponent,
  },
  {
    path: 'updates',
    pathMatch: 'full',
    component: UpdatesComponent,
  },
  {
    path: 'ngrx',
    pathMatch: 'full',
    component: NgrxParentComponent,
  },
];
