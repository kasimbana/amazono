import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';

import { RestApiService } from "./rest-api.service";
import { DataService } from "./data.service";
import { AuthGuardService } from "./auth-guard.service";


import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ //lista de componentes de la app
    AppComponent, HomeComponent, MessageComponent, RegistrationComponent, LoginComponent
  ],
  imports: [ //lista de dependencias de la app
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(), //angular bootstrap
    FormsModule, //para controlar formularios en angular
    HttpClientModule //necesario para hacer llamadas http
  ],
  providers: [RestApiService, DataService, AuthGuardService], //lista de servicios
  bootstrap: [AppComponent] //lista de componentes que serán bootstrapped
})
export class AppModule { }
