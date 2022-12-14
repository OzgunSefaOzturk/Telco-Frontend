import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs/guards/auth.guard';
import { LoginGuard } from 'src/libs/guards/login.guard';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
path:"",
component:AuthComponent,
canActivate:[LoginGuard]
},
{
  path:"login",
  component:LoginComponent,
  canActivate:[AuthGuard]
  
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
