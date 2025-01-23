import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CorsiPrenotatiComponent } from '../corsi/corsi-prenotati/corsi-prenotati.component';
import { CorsiService } from '../corsi/corsi.service';
import { Corso } from '../corsi/corso/corso.model';

@Component({
  selector: 'app-amministrazione',
  standalone: true,
  imports: [CorsiPrenotatiComponent],
  templateUrl: './amministrazione.component.html',
  styleUrl: './amministrazione.component.css',
})
export class AmministrazioneComponent implements OnInit {
  corsi = signal<Corso[] | undefined>(undefined);
  isFetching = signal(false);

  //per poter utilizzare i metodi dell'httpClient lo devo iniettare qui nella classe e dichiarare nel main (appConfig)
  private destroyRef = inject(DestroyRef);
  private corsiService = inject(CorsiService);

  //Voglio caricare gli utenti nel momento in cui accedo alla pagina utilizzando ngOnInit
  ngOnInit() {
    const subscription = this.corsiService.loadCorsiPrenotati().subscribe({
      next: (resData) => {
        this.corsi.set(resData);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
