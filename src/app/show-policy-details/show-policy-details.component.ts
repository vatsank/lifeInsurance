import { PolicyDetail } from './../policy-detail';
import { InsuranceAPIService } from './../insurance-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  srchName = '';
  policyData: PolicyDetail = {
    id: 0,
    policyHolderName: '',
    maturityDate: new Date(),
    policyAmount: 0

  };
  buttonText = 'Add';

   policyList: PolicyDetail[] = [];

   @ViewChild('f') form: any;
   constructor(private service: InsuranceAPIService) { }

  ngOnInit() {

    this.service.findAllPolicy().subscribe(data => this.policyList = data);
  }

   submit() {

     this.service.addPolicy(this.policyData).subscribe(resp => {

      this.policyList.push(resp);
      this.form.reset();
     });
      console.log(this.policyData);
   }

   update(policy) {
       console.log('update called');
   }

   remove(policy) {
     console.log('remove called');
   }
}
