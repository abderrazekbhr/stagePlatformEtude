import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.scss']
})
export class FilePageComponent implements OnInit {
  mat:any[]=[
  {
    "mat":"algebre",
    "col1":"#ffc3a0",
    "col2":"#ffafbd"
  }
  ,
  {
    "mat":"analyse",
    "col1":"#614385",
    "col2":"#516395"
  }
  ,
  {
    "mat":"sta",
    "col1":"#2193b0",
    "col2":"#6dd5ed"
  }
  ,
  {
    "mat":"physique",
    "col1":"#de6262",
    "col2":"#ffb88c"
  }
];
  constructor() {}

  ngOnInit(): void {
  }

}
