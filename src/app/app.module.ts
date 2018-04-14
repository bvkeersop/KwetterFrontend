import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Route } from '@angular/router'

//Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import 'hammerjs'

import { AppComponent } from './app.component';

//General components
import { KweetsComponent } from './kweets/kweets.component';

//Layout components
import { HeaderComponent } from './layout/header/header.component';

//Home-page components
import { HomeComponent } from './home-page/home/home.component';

//Login-page components
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { RegisterFormComponent } from './login-page/register-form/register-form.component';
import { LoginComponent } from './login-page/login/login.component';

//Profile-page components
import { ProfileComponent } from './profile-page/profile/profile.component';
import { LeftsidebarComponent } from './profile-page/leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './profile-page/rightsidebar/rightsidebar.component';
import { UserService } from './services/user.service';

const indexRoute: Route = { path: '', component: HomeComponent };
const fallBackRoute: Route = { path: '**', component: HomeComponent };

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  indexRoute,
  fallBackRoute
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KweetsComponent,
    LeftsidebarComponent,
    RightsidebarComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
