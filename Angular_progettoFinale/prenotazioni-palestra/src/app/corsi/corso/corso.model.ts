//Definisco l'interfaccia per il mio nuovo tipo "Corso"
export interface Corso {
  id: number;
  nome: string;
  image: string;
  descrizione: string;
  istruttore: string;
  durata: number;
  capacita_massima: number;
}
