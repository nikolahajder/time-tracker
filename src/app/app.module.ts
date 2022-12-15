import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker/time-tracker.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    OverlayModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
