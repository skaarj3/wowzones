import { Component, OnInit, Output } from '@angular/core';
import { FactionService } from 'src/app/services/faction.service';


@Component({
  selector: 'app-faction',
  templateUrl: './faction.component.html',
  styleUrls: ['./faction.component.css']
})
export class FactionComponent implements OnInit {

  
  faction: any;

  constructor(private factionService: FactionService) {  }
  
  chooseFaction(faction:any){
    console.log("Has elegido a " + faction);
    this.factionService = faction;
    //localStorage.setItem('faction', JSON.stringify(this.faction));
    //return this.faction;
  }

  getFaction(factionService: FactionService) {

  }

  ngOnInit(): void {
  }

}
