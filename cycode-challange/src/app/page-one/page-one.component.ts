import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../services/header.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  constructor(private headerService:HeaderService,private router:Router) { }
  ngOnInit() {
    if(this.headerService.title===''){
      this.headerService.title='Welcome To The First Page'; 
    }
  }
  public redirectToSecondPage(){
    this.router.navigateByUrl('/pageTwo');
  }

}
