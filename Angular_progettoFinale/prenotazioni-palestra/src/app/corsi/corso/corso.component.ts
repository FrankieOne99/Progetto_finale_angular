import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { Corso } from './corso.model';
import { CorsiService } from '../corsi.service';

@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.css',
})
export class CorsoComponent {
  corso = input.required<Corso>();
  //dichiaro i metodi dell'http
  private destroyRef = inject(DestroyRef);
  private corsiService = inject(CorsiService);
  isFetching = signal(false);

  onClick() {
    const nuovoCorso = {
      id: 10,
      nome: 'CrossFit',
      descrizione:
        'Allenamento che combina sollevamento pesi e ginnastica per migliorare la fisicità.',
      istruttore: 'Alessandro Verdi',
      image: 'http://localhost:3000/images/crossfit.jpg',
      durata: 60,
      capacita_massima: 18,
    };

    const subscription = this.corsiService.addCorso(nuovoCorso).subscribe({
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
