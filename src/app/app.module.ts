import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardMatiersComponent } from './card-matiers/card-matiers.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { FilePageComponent } from './file-page/file-page.component';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
NgModule
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardMatiersComponent,
    PageAcceuilComponent,
    FilePageComponent,
    CardComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
