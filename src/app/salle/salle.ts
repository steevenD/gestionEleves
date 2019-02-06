export class Salle {
  constructor (
    public id: number,
    public nom: string,
    public niveau: number,
    public specialisations: string[]
  ){}
}


const s1: Salle = new Salle(1, 'Salle 1', 4, ['maths', 'anglais'])
const s2: Salle = new Salle(2, 'Salle 2', 1, ['francais']);
const s3: Salle = new Salle(3,'Salle 3', 5, ['espagnol', 'dev']);
const s4: Salle = new Salle(4,'Salle 4' , 4, ['Marketing']);
const s5: Salle = new Salle(5, 'Salle 5', 3, ['SVT']);

export const salles : Salle[] = [
  s1, s2, s3, s4, s5
];
