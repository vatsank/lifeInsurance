import { PolicyDetail } from './../policy-detail';
import { InsuranceAPIService } from './../insurance-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  constructor(private service: InsuranceAPIService) { }

  policyList: PolicyDetail[];
  ngOnInit() {

    this.service.findAllPolicy().subscribe(data => this.policyList = data);
  }

}
