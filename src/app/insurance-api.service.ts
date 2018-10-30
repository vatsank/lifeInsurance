import { InsuranceAdvisor } from './insurance-advisor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  baseURL = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisor[]> {

    const adviseURL = `${this.baseURL}advisors`;
    console.log(adviseURL);
    return this.http.get<InsuranceAdvisor[]>(adviseURL);

  }

  findAllAdvisorsAsPromise(): Promise<InsuranceAdvisor[]> {

    const adviseURL = `${this.baseURL}advisors`;

    return this.http.get<InsuranceAdvisor[]>(adviseURL).toPromise();

  }
}
