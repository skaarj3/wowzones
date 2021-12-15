import { Component, Input, OnInit } from '@angular/core';
import { FactionService } from 'src/app/services/faction.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  faction: any;

  constructor(private factionService: FactionService) {
    this.faction = this.factionService.getFaction();
   }


  getFaction(){
    this.faction = this.factionService.getFaction();
  }

  isHorde(faction:any){
    return faction === "Horde";
  }

  isAlliance(faction:any){
    return faction === "Alliance";
  }

  ngOnInit(): void {
  }

}
