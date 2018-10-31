import { TestimonyComponent } from './../testimony/testimony.component';
import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Policy } from '../policy';
import { Testimony } from '../testimony';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit , AfterViewInit {


  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;

  popularPolicyList: Policy[];
  feedback1: Testimony;
  feedback2: string;
  show = false;
  constructor(private ref: ChangeDetectorRef) {

     this.popularPolicyList = [
       {policyName: 'Jeevan Anand', description: 'Policy with Life cover and Bonus'},
       {policyName: 'Jeevan Akashy', description: 'Policy with Life cover and Coverage for Children'}
      ];

   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

     this.feedback2 = this.compRef.getCorpCustomerFeedBack();

     this.feedback1 = this.compRef.getRetailCustomerFeedBack();

       this.ref.detectChanges();

       this.show = true;
     console.log(this.feedback1);
  }
}
