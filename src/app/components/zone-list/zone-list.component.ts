import { Component, OnInit } from '@angular/core';
//Importamos el servicio ZonesService para usarlo. Allí tenemos el array de las zonas
import { ZonesService } from 'src/app/services/zones.service';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css'],
})
export class ZoneListComponent implements OnInit {
  zoneList: any[] = [];
  //zonelist = this.zoneList.sort();

  /*Inyectamos el servicio a este componente y en el constructor invoco
  el método del servicio que me devuelve la lista*/
  constructor(private zonesService: ZonesService) {
    this.zoneList = [];
    this.zonesService.getZoneList().subscribe((data: any) => {
      this.zoneList = data;
      //hago limpieza en el json
      /* this.zoneList = this.zoneList.filter(function(zone) {
        return  zone.level !== [1, 1];
      }); */
      for (let i = 0; i < this.zoneList.length; i++) {
        if (
          this.zoneList[i].level[0] === null ||
          this.zoneList[i].category === null ||
          !this.zoneList[i].category ||
          this.zoneList[i].level[0] === this.zoneList[i].level[1] ||
          this.zoneList[i].territory === "PvP"
        ) {
          this.zoneList.splice(i, 1);
        }
      }
      for (let i = 0; i < this.zoneList.length; i++) {
        if (this.zoneList[i].level[0] === this.zoneList[i].level[1]) {
          this.zoneList.splice(i, 1);
        }
      }
      for (let i = 0; i < this.zoneList.length; i++) {
        if (this.zoneList[i].territory === "PvP") {
          this.zoneList.splice(i, 1);
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

      //console.log(this.zoneList);
    });
  }

  ngOnInit(): void {}
}
