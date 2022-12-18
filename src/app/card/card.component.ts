import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() matName:String="";
  @Input() colorGrad1:String="#de6262"; 
  @Input() colorGrad2:String="#ffb88c"; 
  source:String="../../assets/"; 
  constructor(){
  } 
  

  ngOnInit(): void {
    this.source+=this.matName+".png"
    console.log(this.colorGrad1+'ed'+this.colorGrad2);
  
  }

}
