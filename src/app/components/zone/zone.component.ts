import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikedService } from 'src/app/services/liked.service';


@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  @Input() zone: any;
  //@Output() like = new EventEmitter();

  constructor(private likedService: LikedService) { }

  ngOnInit(): void {
  }

  wouldLike(zone:any){
    this.likedService.wouldLike(zone);
    //console.log(`I wanna play in ${zone.name}`);
  }
  wouldntLike(zone:any){
    this.likedService.wouldntLike(zone);
  }

  isLiked(zoneId:number){
    return this.likedService.isLiked(zoneId);
  }

  isDungeon(zoneCategory:any){
    return zoneCategory === "Dungeon";
  }
  isRaid(zoneCategory:any){
    return zoneCategory === "Raid";
  }

  isOpenWorld(zoneCategory:any){
    return zoneCategory === "Open World";
  }  
}
