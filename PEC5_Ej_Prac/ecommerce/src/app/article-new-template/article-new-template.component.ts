import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.scss']
})
export class ArticleNewTemplateComponent implements OnInit {
  public article: Article;
  public hideFormTemplate: boolean = true;
  public showAlertMessage = false;

  constructor(private componentCommunicationService: ComponentCommunicationService) { }


  createArticle(articleForm: any) {
    if (articleForm.invalid) {
      const delay = (ms: any) => new Promise(res => setTimeout(res, ms));
      this.showAlertMessage = true;

      const delayer = async () => {
        await delay(5000);
        this.showAlertMessage = false;
      }
      delayer();

    } else {
      const article: Article = articleForm.value.article;
    }
  }

  ngOnInit(): void {
    this.componentCommunicationService.hideTemplateFormEvent.subscribe(() => {
      this.hideFormTemplate = true;
    }),
      this.componentCommunicationService.showTemplateFormEvent.subscribe(() => {
        this.hideFormTemplate = false;
      })
  }

}
