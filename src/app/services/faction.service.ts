import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FactionService {
  faction: any;

  constructor() {}

  //Almacenamos el valor de la facción
  chooseFaction(faction: any) {
    //console.log("Has elegido a " + faction);
    this.faction = faction;
    localStorage.setItem('faction', JSON.stringify(this.faction));
  }

  //Damos el valor de la facción
  getFaction(){
    return this.faction = localStorage.getItem('faction') ? JSON.parse(localStorage.getItem('faction')!) : [];
  }

}
