export class Eleve {
  constructor (
              public id: number,
              public nomDeClasse: string,
              public nom: string,
              public prenom: string,
              public age: number,
              public filliere: string,
              public description: string){

  }
}

const e1: Eleve = new Eleve(1,'MBA1', 'Jean', 'Paul', 59, 'Master', 'Débile');
const e2: Eleve = new Eleve(2,'MBA1', 'Roux', 'Louane', 13, 'Master', 'Débile');
const e3: Eleve = new Eleve(3,'MBA1', 'Oliver', 'Marion', 6, 'Master', 'Débile');
const e4: Eleve = new Eleve(4,'MBA1', 'Deport', 'Antoine', 4, 'Master', 'Débile');
const e5: Eleve = new Eleve(5,'MBA1', 'Demay', 'Steeven', 99, 'Master', 'Débile');

export const eleves = [
e1, e2, e3, e4, e5
];
