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

  private destroyRef = inject(DestroyRef);
  private corsiService = inject(CorsiService);
  isFetching = signal(false);

  //La funzione onClick() mi permette di aggiunger al DB la mia prenotazione
  onClick() {
    const subscription = this.corsiService
      .addPrenotazione(this.corso())
      .subscribe({
        complete: () => {
          this.isFetching.set(false);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
