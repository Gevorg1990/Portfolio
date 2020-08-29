import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import{ FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AngularComponent } from './components/angular/angular.component';
import { MyComponent } from './components/my/my.component';
import { ParalaxComponent } from './components/paralax/paralax.component';




const appRoutes:Routes=[
  // { path:'/',component:AppComponent},
  { path: '',component:AngularComponent},
  {path:'set',component:LayoutComponent},
  
  {path:'home',component:HomeComponent},
  { path: 'mycomponent', component: MyComponent },
   { path: 'paralax',component:ParalaxComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    AngularComponent,
    MyComponent,
    ParalaxComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }