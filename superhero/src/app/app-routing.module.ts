import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppComponent} from './app.component';
import {RegistraionComponent} from './registraion/registraion.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './main/home/home.component';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
      },
      {
        path: 'admin',
        loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'main',
        loadChildren: () => import('src/app/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistraionComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
