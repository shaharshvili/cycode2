import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  constructor(public headerService:HeaderService) { }

  ngOnInit(): void {
    if(this.headerService.title===''){
      this.headerService.title='Welcome To The Third page'; 
    }
  }

}
