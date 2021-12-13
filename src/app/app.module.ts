import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos el módulo http para poder usar el .json externo
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ZoneListComponent } from './components/zone-list/zone-list.component';
import { ZoneComponent } from './components/zone/zone.component';
import { LikedComponent } from './components/liked/liked.component';
import { AboutComponent } from './components/about/about.component';
import { FactionComponent } from './components/faction/faction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ZoneListComponent,
    ZoneComponent,
    LikedComponent,
    AboutComponent,
    FactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
