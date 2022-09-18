import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { AgariTitleRenderer } from './agari.title-renderer';

@Injectable()
export class AgariTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title, private readonly titleRenderer: AgariTitleRenderer) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.title.setTitle(this.titleRenderer.renderTitle(this.buildTitle(snapshot)));
  }
}
