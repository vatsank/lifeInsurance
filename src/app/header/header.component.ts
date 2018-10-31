import { PageLink } from './../page-link';
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

  links:PageLink[];

  constructor() {

    this.links = [
      {linkText: 'Home', linkRef: 'home', linkStyle: 'nav-link'},
      {linkText: 'Products', linkRef: 'products', linkStyle: 'nav-link'},
      {linkText: 'History', linkRef: 'history', linkStyle: 'nav-link'}
     ];
    this.majHeading = 'MinBapa Insurance';
    this.logo = 'assets/images/logo.jpg';
   }

  ngOnInit() {
  }

}
