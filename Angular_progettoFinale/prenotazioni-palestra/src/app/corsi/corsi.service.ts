import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Corso } from './corso/corso.model';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorsiService {
  public httpClient = inject(HttpClient);

  //creo un metodo per recuperare dati del backend
  public fetchCorsi(url: string, errorMessage: string) {
    return this.httpClient.get<Corso[]>(url).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => {
          new Error(errorMessage);
        });
      })
    );
  }

  //Creo e definisco loadCorsi per caricare tutti i corsi dall'API

  loadCorsi() {
    return this.fetchCorsi(
      'http://localhost:3000/corsi',
      'Qualcosa è andato storto'
    );
  }

  //Creo e definisco loadCorsiPrenotati per caricare tutti i corsi prenotati dall'API

  loadCorsiPrenotati() {
    return this.fetchCorsi(
      'http://localhost:3000/corsiPrenotati',
      'Qualcosa è andato storto'
    );
  }
  //Creo e definisco loadCorsiPrenotati per aggiungere una nuova prenotazione
  addPrenotazione(corso: Corso) {
    return this.httpClient
      .post<Corso>('http://localhost:3000/corsiPrenotati', corso)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error("Errore nell'aggiungere il corso"));
        })
      );
  }
  //Creo e definisco deletePrenotazione per eliminare la prenotazione dal DB
  deletePrenotazione(corso: Corso) {
    const url = `http://localhost:3000/corsiPrenotati/${corso.id}`;
    return this.httpClient.delete<Corso>(url).pipe(
      tap({
        next: (response) => {
          console.log('Prenotazione eliminata:', response);
        },
        error: (error) => {
          console.error("Errore durante l'eliminazione:", error);
        },
      })
    );
  }
}
