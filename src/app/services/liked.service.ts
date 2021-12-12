import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  likedZones: any[] = [];

  constructor() {
    this.likedZones = localStorage.getItem('likedList') ? (JSON.parse(localStorage.getItem('likedList') || '{}')) : [];
   }

  wouldLike(zone: any) {
    this.likedZones.push(zone);
    localStorage.setItem('likedList', JSON.stringify(this.likedZones));
  }

  getLikedZones() {
    return this.likedZones = localStorage.getItem('likedList') ? JSON.parse(localStorage.getItem('likedList')!) : [];
  }

  wouldntLike(zoneToRemove:any){
    let index = this.likedZones.findIndex(zone => zone.id === zoneToRemove.id);
    this.likedZones.splice(index, 1);
    localStorage.setItem('likedList', JSON.stringify(this.likedZones));
  }

  isLiked(id:number){
    return this.likedZones.findIndex(zone => zone.id === id) >=0 ? true : false;
    //Si devuelve un valor >0 está en el array
  }
}
