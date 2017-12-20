import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Routes
import {app_routing } from './app.routes'

//Services

import {HotsService} from './services/hots-service.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { LoaderComponent } from './components/shared/loader/loader.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroesComponent,
    HeroeComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    HotsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
