import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MainBarTitleService} from "../core/main-bar-title.service";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  public steps!: MenuItem[];

  constructor(
    private readonly mainBarTitleService: MainBarTitleService
  ) {
  }

  ngOnInit() {
    const setMainBarTitle = () => {
      this.mainBarTitleService.mainBarTitle.next("Wizard")
    }

    const initializeSteps = () => {
      this.steps = [
        {
          label: 'Image',
          routerLink: "image",
        },
        {
          label: 'Fields',
          routerLink: "fields",
        },
        {
          label: 'Payment',
        },
        {
          label: 'Confirmation',
        }
      ];
    }

    setMainBarTitle();
    initializeSteps();
  }

  ngOnDestroy() {
  }
}
