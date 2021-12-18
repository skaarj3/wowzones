import { Component, OnInit } from '@angular/core';
//Importamos el servicio ZonesService para usarlo. Allí tenemos el array de las zonas
import { ZonesService } from 'src/app/services/zones.service';
import { FactionService } from 'src/app/services/faction.service';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css'],
})
export class ZoneListComponent implements OnInit {
  zoneListOriginal: any[] = [];
  zoneList: any[] = [];
  faction: any;

  /*Inyectamos el servicio a este componente y en el constructor invoco
  el método del servicio que me devuelve la lista*/
  constructor(
    private zonesService: ZonesService,
    private factionService: FactionService
  ) {
    this.zonesService.getZoneList().subscribe((data: any) => {
      this.zoneListOriginal = data;

      //hago limpieza en el json
      for (let i = 0; i < this.zoneListOriginal.length; i++) {
        /*         if (this.zoneList[i].level[0] === null) {
          this.zoneList.splice(i, 1);
        }
        if (this.zoneList[i].category === null) {
          this.zoneList.splice(i, 1);
        }
        if (!this.zoneList[i].category) {
          this.zoneList.splice(i, 1);
        }
        if (this.zoneList[i].level === null) {
          this.zoneList.splice(i, 1);
        }
        if (this.zoneList[i].level[0] === this.zoneList[i].level[1]) {
          this.zoneList.splice(i, 1);
        }
        if (this.zoneList[i].territory === 'PvP') {
          this.zoneList.splice(i, 1);
        }
        if (this.zoneList[i].name === 'REUSE') {
          this.zoneList.splice(i, 1);
        } */
        console.log(
          'i vale',
          i +
            '. zoneListOriginal[i].territory vale ' +
            this.zoneListOriginal[i].territory +
            '.'
        );

          if ((this.faction === this.zoneListOriginal[i].territory) && (this.zoneListOriginal[i].level[0] >= 1)) {
            //console.log("this.faction vale",this.faction,"zoneList[",i,"].territory vale ",this.zoneList[i].territory,"y hay que agregarlo al zonelist normal");
            this.zoneList.push(this.zoneListOriginal[i]);
          };
          if ((this.zoneListOriginal[i].territory === "Contested") && (this.zoneListOriginal[i].level[0] >= 1)) {
            this.zoneList.push(this.zoneListOriginal[i]);
          }
        
      }

      this.zoneList.sort(function (a, b) {
        if (a.level > b.level) {
          return 1;
        }
        if (a.level < b.level) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    });
  }

  ngOnInit(): void {
    this.faction = this.factionService.faction;
    //console.log('Recibiendo data en ZoneList...', this.faction);
  }
}
