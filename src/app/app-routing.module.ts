import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutosComponent } from './autos/autos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'login',component: LoginComponent},
  {path:'autos', component: AutosComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
