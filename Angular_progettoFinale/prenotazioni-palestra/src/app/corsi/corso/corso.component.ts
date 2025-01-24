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
