import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../services/header.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css'],
  animations:[
    trigger('openCloseState',[
      state('open',style({
        opacity:1,
        height:'50%',
          width:'50%',
          backgroundColor:'red',
          position:'fixed',
          top:'25%',
          left:'25%',
          right:'25%',
          bottom:'25%'
    })),
  state('close',style({
    
    opacity:1,
    height:'40%',
      width:'40%',
      backgroundColor:'red',
      position:'fixed',
      top:'30%',
      left:'30%',
      right:'30%',
      bottom:'30%'
  })),
  transition('close => open',animate('1s')),
  transition('open => close',animate('1s'))
])]
})
export class PageTwoComponent implements OnInit {

  constructor(public headerService:HeaderService,private router:Router) { }
  open:boolean= false;
  numberToFilter:number=0;
  optionsInSelect:number[]=[1,2,3,4,5,6,7,8,9,10];
  optionsToShow:number[]=[];
  chips:number[]=[];

  ngOnInit(): void {
    this.optionsInSelect.forEach(n=>{
      this.optionsToShow.push(n);
    })
    if(this.headerService.title===''){
      this.headerService.title="Welcome To The Second Page"; 
    }
  }
  public changeState(){
    this.open=!this.open;
  }
  get openState(){
    return this.open ? 'open':'close'
  }
  public keyPress() {
    this.optionsToShow=[];
    var valueOfInput =(<HTMLInputElement>document.getElementById('value')).value; 
    this.optionsToShow=this.optionsInSelect.filter(currant=>{
      if(currant.toString()===valueOfInput){
        this.headerService.selectedNumbers.push(currant)
      }
    });
  }
  public filter(bla:number){
    console.log(bla);
  }
  public onSubmit(){
    this.headerService.title=this.headerService.selectedNumbers.toString() +' ' +'user subscribed';
    this.router.navigateByUrl('/pageOne')
  }
  public addChip(numberToAdd:number){
    this.headerService.selectedNumbers.push(numberToAdd)
  }
}
