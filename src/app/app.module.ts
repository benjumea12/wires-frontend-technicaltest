import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InputItemComponent } from './components/input-item/input-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    HomeComponent,
    LoginComponent,
    InputItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
