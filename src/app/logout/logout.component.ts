import { ComponentCommunicationService } from './../component-communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:ComponentCommunicationService) { }

  ngOnInit() {
  }

  signout() {

     this.service.changeMessage('logout');
  }
}
