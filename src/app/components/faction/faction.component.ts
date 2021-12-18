import { Component, Input, OnInit, Output } from '@angular/core';
import { FactionService } from 'src/app/services/faction.service';

@Component({
  selector: 'app-faction',
  templateUrl: './faction.component.html',
  styleUrls: ['./faction.component.css'],
})

export class FactionComponent implements OnInit {
  faction: any;
  constructor(public factionService: FactionService) {}

  chooseFaction(faction: any) {
    this.faction = faction;
    //this.factionService.disparadorDeFaccion.emit({ data: faction });
    console.log("Desde factionComponent emitimos el dato:",faction);
    this.factionService.faction = this.faction;
    //localStorage.setItem('faction', JSON.stringify(this.faction));
  }

  ngOnInit(): void {}
}
