import { Injectable } from '@angular/core';
// import { AnyARecord } from 'dns';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarEventService {
  private sidebarEventObs$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  getSidebarEventObs(): Observable<any> {
    return this.sidebarEventObs$.asObservable();
}

  triggerSidebarEventObs(msg: any) {
    this.sidebarEventObs$.next(msg);
  }
}
