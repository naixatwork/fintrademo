import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IPeople} from "./people.type";

@Injectable()
export class WizardPeopleService {
  private _people$ = new BehaviorSubject<IPeople[]>(
    [
      {
        id: 1,
        name: "Mat",
        avatar: 'https://i.pravatar.cc/500?img=6',
        email: 'mat@fintranet.com'
      },
      {
        id: 2,
        name: "Julia",
        avatar: 'https://i.pravatar.cc/500?img=19',
        email: 'juli@fintranet.com'
      },
      {
        id: 3,
        name: "reza",
        avatar: 'https://i.pravatar.cc/500?img=56',
        email: 'reza@fintranet.com'
      }
    ]
  )

  public get people$(): Observable<IPeople[]> {
    return this._people$.asObservable();
  }

  constructor() { }
}
