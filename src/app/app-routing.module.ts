import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: "signup", component: SignupComponent },
  { path: "", component: HomeComponent },
  { path: "info/:id", component: InfoComponent },
  { path: "edit/:userId", component: EditComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
