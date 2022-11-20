import { Component } from '@angular/core';
import {MainBarTitleService} from "../../core/main-bar-title.service";

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent {
  private _isWide = true;

  public get isWide(): boolean {
    return this._isWide;
  }

  public _toggle(): void {
    this._isWide = !this._isWide;
  }

  constructor(public readonly mainBarTitleService: MainBarTitleService) {
  }
}
