import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { single } from 'rxjs';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AboutComponent } from './component/about/about.component';
import { CreateBinComponent } from './component/create-bin/create-bin.component';

export const routes: Routes = [
    {path:"signup", component:SignupComponent},
    {path:"login", component:LoginComponent},
    {path:"", redirectTo:"/login", pathMatch:"full"},
    {path:"create", component:CreateBinComponent},
    {path:"about", loadComponent:() => import('./component/about/about.component').then(mod => mod.AboutComponent)},
    {path:"**", component:NotFoundComponent}
];
