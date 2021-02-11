import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DetailsComponent } from './view/details/details.component';
import { ErrorpageComponent } from './view/errorpage/errorpage.component';
import { LoginComponent } from './view/login/login.component';
import { SignupComponent } from './view/signup/signup.component';

const routes: Routes = [
  {path:'', children:
    [
    {path:'', redirectTo: 'details', pathMatch:'full'},
    { 
      path: 'details', loadChildren: () => 
    import('./view/details/details.module').then(m => m.DetailsModule) 
    },
    // { path: 'details', component: DetailsComponent},
    {path:'login', component: LoginComponent },
    {path:'signup',component: SignupComponent},
    // {path: '**', component: ErrorpageComponent}
    ]
  },
  
];

const config: ExtraOptions ={
  useHash: true,
  scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: 'reload',
  enableTracing: false
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
