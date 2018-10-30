import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  popularPolicyList: Policy[];
  constructor() {

     this.popularPolicyList = [
       {policyName: 'Jeevan Anand', description: 'Policy with Life cover and Bonus'},
       {policyName: 'Jeevan Akashy', description: 'Policy with Life cover and Coverage for Children'}
      ];

   }

  ngOnInit() {
  }

}
