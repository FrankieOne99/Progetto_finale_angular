import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CorsiService } from '../corsi/corsi.service';
import { Corso } from '../corsi/corso/corso.model';
import { CorsoComponent } from '../corsi/corso/corso.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CorsoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  corsi = signal<Corso[] | undefined>(undefined);
  isFetching = signal(false);

  //per poter utilizzare i metodi dell'httpClient lo devo iniettare qui nella classe e dichiarare nel main (appConfig)
  private destroyRef = inject(DestroyRef);
  private usersService = inject(CorsiService);

  //Voglio caricare gli utenti nel momento in cui accedo alla pagina utilizzando ngOnInit (implementare l'interfaccia OnInit). ATT: il metodo ngOnInit viene chiamato un attimo dopo il costruttore. L'ngOnInit viene chiamato appena renderizzo il component
  ngOnInit() {
    const subscription = this.usersService.loadCorsi().subscribe({
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
