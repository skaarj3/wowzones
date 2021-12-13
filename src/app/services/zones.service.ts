import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ZonesService {
  url =
    'https://raw.githubusercontent.com/nexus-devs/wow-classic-items/master/data/json/zones.json';
    
    //zoneList:any[] = [];
    /* zoneList = /*[
    {
      id: 3717,
      name: 'The Slave Pens',
      category: 'Dungeon',
      level: [61, 69],
      territory: 'Contested',
    },
    {
      id: 3562,
      name: 'Hellfire Ramparts',
      category: 'Dungeon',
      level: [59, 67],
      territory: 'Contested',
    },
    {
      id: 3713,
      name: 'The Blood Furnace',
      category: 'Dungeon',
      level: [60, 68],
      territory: 'Contested',
    },
    {
      id: 3792,
      name: 'Mana-Tombs',
      category: 'Dungeon',
      level: [63, 70],
      territory: 'Contested',
    },
    {
      id: 3716,
      name: 'The Underbog',
      category: 'Dungeon',
      level: [62, 70],
      territory: 'Contested',
    },
    {
      id: 3483,
      name: 'Hellfire Peninsula',
      level: [58, 70],
      territory: 'Contested',
    },
    {
      id: 3521,
      name: 'Zangarmarsh',
      level: [60, 63],
      territory: 'Contested',
    },
  ]; */

  constructor(private http: HttpClient) {

  }

  //métodos para manejar la información. Aquí producimos los datos del http
  //Esto devuelve una instancia de un observable. 
  getZoneList() {
    return this.http.get(this.url);//.pipe -> en el pipe meto lo que quiero hacer con el url
  }
}
