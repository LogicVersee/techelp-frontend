import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {memberships} from "../interface/memberships";
import {Observable} from "rxjs";
import {Subscription} from "../interface/Subscription";

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

   private ServiceUrl: string = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  getAll(): Observable<memberships[]> {
    return this.http.get<memberships[]>(`${this.ServiceUrl}/Memberships`)
  }
  getSuscriptionbyUser(userid:number):Observable<Subscription>{
    return this.http.get<Subscription>(`${this.ServiceUrl}/Subscriptions/${userid}`)
  }

  PutMembership(userid:number,subscription:Subscription){

    return this.http.put<Subscription>(`${this.ServiceUrl}/Subscriptions/${userid}`,subscription)
  }
}
