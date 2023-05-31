import { Article } from "../model/article";
import { NameArticleValidator } from "./custom-validator";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ComponentCommunicationService } from '../component-communication.service';


@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.scss']
})

export class ArticleNewReactiveComponent implements OnInit {
  public article: Article;
  public articleForm: FormGroup;
  public hideForm: boolean = true;
  public showAlertMessage: boolean = false;

  constructor(private componentCommunicationService: ComponentCommunicationService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      name: [null, Validators.required, [NameArticleValidator]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: [null, [Validators.required, Validators.pattern("^[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$")]],
      isOnSale: [null]
    })
  }

  ngOnInit(): void {
    this.componentCommunicationService.hideReactiveFormEvent.subscribe(() => {
      this.hideForm = true;
    }),
      this.componentCommunicationService.showReactiveFormEvent.subscribe(() => {
        this.hideForm = false;
      })
  }

  get name() { return this.articleForm.get('name'); }
  get price() { return this.articleForm.get('price'); }
  get imageUrl() { return this.articleForm.get('imageUrl'); }
  get isOnSale() { return this.articleForm.get('isOnSale'); }

  onSubmit() {
    if (this.articleForm.invalid) {
      const delay = (ms: any) => new Promise(res => setTimeout(res, ms));
      this.showAlertMessage = true;

      const delayer = async () => {
        await delay(5000);
        this.showAlertMessage = false;
      }
      delayer();

    } else {
      const article: Article = this.articleForm.value.article;
    }

    console.log(this.articleForm.value);
  }
}
