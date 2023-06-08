import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from '../../components/menu/menu.component';
import { BounceDirective } from '../bounce/bounce.directive';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BounceWithAngularDirective } from '../../bounce-with-angular.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BounceDirective,
    BounceWithAngularDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
