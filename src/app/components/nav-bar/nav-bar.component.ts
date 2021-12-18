import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FactionService } from 'src/app/services/faction.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent implements OnInit {
  constructor(public factionService: FactionService) {}
  public faction: any;

/*   isHorde(faction: any) {
    return (faction = 'Horde');
  }

  isAlliance(faction: any) {
    return (faction = 'Alliance');
  } */

  ngOnInit(): void {
    this.faction = this.factionService.faction;
      //console.log('Recibiendo data en NavBar...', this.faction);
  }
}
