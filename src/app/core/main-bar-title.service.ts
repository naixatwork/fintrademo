import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainBarTitleService {
  public mainBarTitle = new BehaviorSubject<string>("Dashboard");
}
