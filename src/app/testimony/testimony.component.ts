import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   getRetailCustomerFeedBack(): string {

    return 'Claims processing is prompt and received payment within a weeks time';

   }

   getCorpCustomerFeedBack(): string{

    return 'Door step service by the advisors is very much appreciated';
   }
}
