import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Corso } from './corso/corso.model';
import { CorsiService } from './corsi.service';
import { CorsoComponent } from './corso/corso.component';

@Component({
  selector: 'app-corsi',
  standalone: true,
  imports: [CorsoComponent],
  templateUrl: './corsi.component.html',
  styleUrl: './corsi.component.css',
})
export class CorsiComponent implements OnInit {
  corsi = signal<Corso[] | undefined>(undefined);
  isFetching = signal(false);

  //per poter utilizzare i metodi dell'httpClient lo devo iniettare qui nella classe e dichiarare nel main (appConfig)
  private destroyRef = inject(DestroyRef);
  private corsiService = inject(CorsiService);

  //Voglio caricare gli utenti nel momento in cui accedo alla pagina utilizzando ngOnInit
  ngOnInit() {
    const subscription = this.corsiService.loadCorsi().subscribe({
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
