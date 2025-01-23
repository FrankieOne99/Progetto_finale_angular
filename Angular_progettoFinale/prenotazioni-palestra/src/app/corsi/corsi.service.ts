import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Corso } from './corso/corso.model';
import { catchError, throwError } from 'rxjs';

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

  loadCorsiPrenotati() {
    return this.fetchCorsi(
      'http://localhost:3000/corsiPrenotati',
      'Qualcosa è andato storto'
    );
  }

  addCorso(nuovoCorso: Corso) {
    return this.httpClient
      .post<Corso>('http://localhost:3000/corsiPrenotati', nuovoCorso)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error("Errore nell'aggiungere il corso"));
        })
      );
  }
}
