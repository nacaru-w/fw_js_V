import { Component } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private componentCommunicationService: ComponentCommunicationService) { }

  hideArticleList(): void {
    this.componentCommunicationService.triggerListHide();
  }

  showArticleList(): void {
    this.componentCommunicationService.triggerListShow();
  }

  hideTemplateForm(): void {
    this.componentCommunicationService.triggerTemplateFormHide();
  }

  showTemplateForm(): void {
    this.componentCommunicationService.triggerTemplateFormShow();
  }

}
