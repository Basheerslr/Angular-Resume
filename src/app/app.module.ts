import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginFormComponent } from './loginform/loginform.component';
import { NewformComponent } from './newform/newform.component';

@NgModule({
  declarations: [
    AppComponent,
    loginFormComponent,
    NewformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
