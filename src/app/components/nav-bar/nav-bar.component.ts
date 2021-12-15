import { Component, Input, OnInit } from '@angular/core';
import { FactionService } from 'src/app/services/faction.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public faction: any;

  constructor(private factionService: FactionService) { }


/*   getFaction(){
    this.faction = this.factionService.getFaction();
  } */

  isHorde(faction:any){
    return faction === "Horde";
  }

  isAlliance(faction:any){
    return faction === "Alliance";
  }

  ngOnInit(): void {
    this.factionService.varFaction.subscribe(data => {console.log(`Recibiendo datos...`,data);
    this.faction = data;
  })
  }

}
