import { Component, OnInit } from '@angular/core';
import { myLogger } from '../custom-decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@myLogger()
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
