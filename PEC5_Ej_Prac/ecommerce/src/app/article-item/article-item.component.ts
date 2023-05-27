import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../model/article';
import { ArticleQuantityChange } from '../model/article-quantity-change';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticleItemComponent implements OnInit {

  public articleClasses: any;
  @Input() public article: Article;
  @Output() private quantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.articleClasses = {
      "not-on-sale": !this.article.isOnSale
    }
  }

  addtoCart(): void {
    this.quantityChange.emit({ article: this.article, changeInQuantity: 1 });
  }

  removeFromCart(): void {
    if (this.article.quantityInCart > 0) {
      this.quantityChange.emit({ article: this.article, changeInQuantity: -1 });

    }
  }

  disableButton(): boolean {
    return !Boolean(this.article.quantityInCart)
  }

}
