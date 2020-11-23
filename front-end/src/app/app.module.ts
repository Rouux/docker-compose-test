import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './card/card.component';
import { AnimalRestService } from './shared/services/animal-rest/animal-rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [AnimalRestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
