import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplesComponent } from './apples/apples.component';
import { ApplesService } from './apples/apples.service';
import { ApplesDialogComponent } from './apples/apples-dialog/apples-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplesComponent,
    ApplesDialogComponent
  ],
  entryComponents: [
    ApplesDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    ApplesService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
