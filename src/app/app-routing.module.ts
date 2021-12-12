import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LikedComponent } from './components/liked/liked.component';
import { ZoneListComponent } from './components/zone-list/zone-list.component';

const routes: Routes = [
  { path: '', component: ZoneListComponent},
  { path: 'zone-list', component: ZoneListComponent},
  { path: 'liked', component: LikedComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
