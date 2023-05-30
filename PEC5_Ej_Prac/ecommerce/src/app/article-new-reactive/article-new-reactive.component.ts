import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';


@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.scss']
})

export class ArticleNewReactiveComponent implements OnInit {

  public hideForm: boolean = true;

  constructor(private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit(): void {
    this.componentCommunicationService.hideReactiveFormEvent.subscribe(() => {
      this.hideForm = true;
    }),
      this.componentCommunicationService.showReactiveFormEvent.subscribe(() => {
        this.hideForm = false;
      })
  }

}
