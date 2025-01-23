import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { CorsiComponent } from './corsi/corsi.component';
import { CorsoComponent } from './corsi/corso/corso.component';
import { AmministrazioneComponent } from './amministrazione/amministrazione.component';

//Definisco le routes delle varie pagine
export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'chi-siamo', component: ChiSiamoComponent },

  {
    path: 'nostri-corsi',
    component: CorsiComponent,
  },
  { path: 'amministrazione', component: AmministrazioneComponent },
];
