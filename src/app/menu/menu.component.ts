import { PageLink } from './../page-link';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

      @Input() linksFromParent: PageLink[];
  constructor() { }

  ngOnInit() {
  }

}
