import { ShowLocationComponent } from './../show-location/show-location.component';
import { ComponentAdderService } from './../component-adder.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  srchCity = '';
  branchList: string[];

  @ViewChild('locationInfo', {read: ViewContainerRef}) viewRef: ViewContainerRef;
  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }

    onChange(val) {

      this.branchList = val;
    }

    add() {

        this.service.setViewRef(this.viewRef);
       const comp = this.service.addComponent(ShowLocationComponent);
       const locationComp = (<ShowLocationComponent>comp.instance);

       locationComp.selectedLocation.subscribe(value => {
         console.log(value);
           this.srchCity = value;
           if ( value.length > 0) {
            this.remove();
          }
      });
    }

    remove() {

      this.service.remove();
    }
}
