import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { LikedService } from 'src/app/services/liked.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {

  likedList: any[] = [];

  constructor(private likedService: LikedService, private router: Router) {
    this.likedList = this.likedService.getLikedZones();
    //console.log(this.likedList);
  }

  ngOnInit(): void {
  }

  goBack(): void{
    this.router.navigate([".."]);
  }
}
