import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faction',
  templateUrl: './faction.component.html',
  styleUrls: ['./faction.component.css']
})
export class FactionComponent implements OnInit {

  faction: any;

  constructor() { }
  
  chooseFaction(faction:any){
    console.log("Has elegido a " + faction);
    return this.faction;
  }

  ngOnInit(): void {
  }

}
