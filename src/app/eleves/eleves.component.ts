import { Component, OnInit } from '@angular/core';
import {Eleve, eleves} from '../eleve';
import {EleveService} from './eleve.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../notification/service/notification.service';
import {HttpClient} from '@angular/common/http';
import {InMemoryDataService} from '../in-memory-data.service';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {
  eleves : Array<Eleve> = eleves;

  eleveToDisplay: Eleve;

  eleveToModify: Eleve;

  userForm: FormGroup;

  idControl: FormControl;
  classControl: FormControl;
  nomControl: FormControl;
  prenomControl: FormControl;
  ageControl: FormControl;
  filliereControl: FormControl;
  descriptionControl: FormControl;
  emailControl: FormControl;

  constructor(private memoryService: InMemoryDataService, private http: HttpClient, private eleveService: EleveService, private fb: FormBuilder, private route: Router, private notificationService: NotificationService) {
    this.idControl = this.fb.control('');
    this.classControl = this.fb.control('');
    this.nomControl = this.fb.control('', [Validators.required, Validators.maxLength(25)]);
    this.prenomControl = this.fb.control('', [Validators.required, Validators.maxLength(25)]);
    this.ageControl = this.fb.control('', [Validators.required]);
    this.filliereControl = this.fb.control('');
    this.descriptionControl = this.fb.control('');
    this.emailControl = this.fb.control('', 	Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'));

    this.userForm = this.fb.group({
      idC: this.idControl,
      classC: this.classControl,
      nom: this.nomControl,
      prenom: this.prenomControl,
      age: this.ageControl,
      filliere: this.filliereControl,
      desc: this.descriptionControl,
      mail: this.emailControl
    });
  }


  ngOnInit() {
    let elevesTab = [];
    this.eleveService.getAllEleves().subscribe(
      eleves => {
        console.log(eleves);
        elevesTab.push(eleves);
      }
    );
    this.eleves = eleves;
  }

  getDescription(id: number){
    this.eleveService.getEleve(id).subscribe(
      // eleve => this.eleveToDisplay = eleve,
      (err) => console.error(err),
    );
    this.route.navigate(['eleves', id]);
  }

  getEleveTrenteAns(){
    /**
     * Code si on utilise le form (observable)
     */
    // let elevesTab = [];
    // this.eleveService.getAllEleves()
    //   .pipe(filter(eleve  => eleve.age >= 30))
    //   .subscribe(eleves => {
    //     elevesTab.push(eleves);
    //   });
    // this.eleves = elevesTab;
    let tab = [];
      for (let i = 0; i < this.eleves.length; i++){
        if (this.eleves[i].age >= 30){
          tab.push(this.eleves[i]);
        }
      }
      this.eleves = tab;
  }

  getInitial(e: Eleve){
    let nom = e.nom.substring(0, 1);
    e.nom = nom;
    return e;
  }

  handleClickInitial(){
    /**
     * Code si on utilise le form (observable)
     */
    // this.eleveService.getAllEleves().pipe(
    //   map(e => this.getInitial(e))
    // ).subscribe();

      for (let i = 0; i < this.eleves.length; i++){
        this.getInitial(this.eleves[i]);
      }

  }

  addEleve(){
    const newEleve : Eleve = {
      id :null,
      nom: this.userForm.value.nom,
      prenom: this.userForm.value.prenom,
      nomDeClasse: this.userForm.value.classC,
      filliere: this.userForm.value.filliere,
      description: this.userForm.value.desc,
      age: this.userForm.value.age
    };
    newEleve.id = this.memoryService.genId(this.eleves);
    this.eleveService.addEleve(newEleve).subscribe();
    this.userForm.reset();

    this.notificationService.add('Vous avez ajouté : ' + newEleve.nom + ' ' + newEleve.prenom)
  }

  handleClickUpdate(e: Eleve){
    this.userForm.get('nom').setValue(e.nom);
    this.userForm.get('prenom').setValue(e.prenom);
    this.userForm.get('classC').setValue(e.nomDeClasse);
    this.userForm.get('filliere').setValue(e.filliere);
    this.userForm.get('desc').setValue(e.description);
    this.userForm.get('age').setValue(e.age);

    this.eleveToModify = e;
  }

  updateEleve() {
    const eleveUpdate : Eleve = {
      id :this.eleveToModify.id,
      nom: this.userForm.value.nom,
      prenom: this.userForm.value.prenom,
      nomDeClasse: this.userForm.value.classC,
      filliere: this.userForm.value.filliere,
      description: this.userForm.value.desc,
      age: this.userForm.value.age
    };

    this.eleveService.updateEleve(eleveUpdate).subscribe();
  }

  handleClickDelete(id: number){
    this.eleveService.deleteEleve(id).subscribe();
  }

}
