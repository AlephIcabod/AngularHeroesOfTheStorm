import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroeComponent  } from "./components/heroe/heroe.component";
const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:Nombre', component: HeroeComponent },
  { path: '**', pathMatch:'full',redirectTo:'home' },
];

export const app_routing=RouterModule.forRoot(ROUTES,{useHash:true})
