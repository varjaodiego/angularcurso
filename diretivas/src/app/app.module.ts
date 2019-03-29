import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { TesteStyleComponent } from './teste-style/teste-style.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasNgifComponent,
    TesteStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
