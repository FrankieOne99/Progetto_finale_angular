import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { Corso } from '../corso/corso.model';
import { CorsiService } from '../corsi.service';

@Component({
  selector: 'app-corsi-prenotati',
  standalone: true,
  imports: [],
  templateUrl: './corsi-prenotati.component.html',
  styleUrl: './corsi-prenotati.component.css',
})
export class CorsiPrenotatiComponent {
  corso = input.required<Corso>();

  private destroyRef = inject(DestroyRef);
  private corsiService = inject(CorsiService);

  isFetching = signal(false);
  onClick() {
    const subscription = this.corsiService
      .deletePrenotazione(this.corso())
      .subscribe({
        complete: () => {
          this.isFetching.set(false);
          location.reload();
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
