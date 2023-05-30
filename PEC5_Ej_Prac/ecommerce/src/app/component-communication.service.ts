import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {

  hideArticleListEvent: EventEmitter<void> = new EventEmitter<void>();
  showArticleListEvent: EventEmitter<void> = new EventEmitter<void>();
  hideTemplateFormEvent: EventEmitter<void> = new EventEmitter<void>();
  showTemplateFormEvent: EventEmitter<void> = new EventEmitter<void>();
  hideReactiveFormEvent: EventEmitter<void> = new EventEmitter<void>();
  showReactiveFormEvent: EventEmitter<void> = new EventEmitter<void>();


  triggerListHide(): void {
    console.log("triggering hide")
    this.hideArticleListEvent.emit();
  }

  triggerListShow(): void {
    console.log("triggering show")
    this.showArticleListEvent.emit();
  }

  triggerTemplateFormHide(): void {
    console.log("triggering form hide")
    this.hideTemplateFormEvent.emit();
  }

  triggerTemplateFormShow(): void {
    console.log("triggering form show")
    this.showTemplateFormEvent.emit();
  }

  triggerReactiveFormHide(): void {
    console.log("triggering reactive form hide");
    this.hideReactiveFormEvent.emit();
  }

  triggerReactiveFormShow(): void {
    console.log("triggering reactive form show");
    this.showReactiveFormEvent.emit();
  }

}
