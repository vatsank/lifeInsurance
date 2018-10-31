import { TestimonyComponent } from './../testimony/testimony.component';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Policy } from '../policy';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit , AfterViewInit {


  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;

  popularPolicyList: Policy[];
  feedback1: string;
  feedback2: string;
  constructor() {

     this.popularPolicyList = [
       {policyName: 'Jeevan Anand', description: 'Policy with Life cover and Bonus'},
       {policyName: 'Jeevan Akashy', description: 'Policy with Life cover and Coverage for Children'}
      ];

   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

     this.feedback1 = this.compRef.getCorpCustomerFeedBack();
     this.feedback2 = this.compRef.getRetailCustomerFeedBack();
  }
}
