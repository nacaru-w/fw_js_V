import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.scss']
})
export class ArticleNewTemplateComponent implements OnInit {

  public hideFormTemplate: boolean = true;

  constructor(private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit(): void {
    this.componentCommunicationService.hideTemplateFormEvent.subscribe(() => {
      this.hideFormTemplate = true;
    }),
      this.componentCommunicationService.showTemplateFormEvent.subscribe(() => {
        this.hideFormTemplate = false;
      })
  }

}
