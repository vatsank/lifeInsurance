import { LogoutComponent } from './logout/logout.component';
import { Injectable } from '@angular/core';
import { CanActivate,CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate , CanDeactivate<LogoutComponent> {

  constructor(private router: Router){

  }

  canDeactivate(component: LogoutComponent, currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot): boolean {



       let result =  window.confirm('Are you sure');

    if (!result) {
         result = true;
        // this.router.navigate(['quote']);
    }
    return result;
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      let allow = false;
      if (sessionStorage.getItem('logged') === 'true') {
                allow = true;
      } else {
           this.router.navigate(['login', 'Logged User can only access this page'] );
      }
    return allow;
  }
}
