import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplesComponent } from './apples/apples.component';
import { ApplesService } from './apples/apples.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApplesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
