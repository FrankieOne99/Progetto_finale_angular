//Definisco l'interfaccia per il mio nuovo tipo "Corso"
export interface Corso {
  id: number;
  nome: string;
  image: string;
  descrizione: string;
  istruttore: string;
  durata: 60;
  capacita_massima: 20;
}
