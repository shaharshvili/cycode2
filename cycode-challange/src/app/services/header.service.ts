import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  title:string=''; 
  selectedNumbers:number[]=[]

  constructor() { 
  }
}
