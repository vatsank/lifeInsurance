import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeading: string;
  logo: string;
  constructor() {

    this.majHeading = 'MinBapa Insurance';
    this.logo = 'assets/images/logo.jpg';
   }

  ngOnInit() {
  }

}
