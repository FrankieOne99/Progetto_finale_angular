import { Component, input } from '@angular/core';
import { Corso } from '../corso/corso.model';

@Component({
  selector: 'app-corsi-prenotati',
  standalone: true,
  imports: [],
  templateUrl: './corsi-prenotati.component.html',
  styleUrl: './corsi-prenotati.component.css',
})
export class CorsiPrenotatiComponent {
  corso = input.required<Corso>();
}
