import { browser, by, element } from 'protractor';

export class TunnelAPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yuc-root h1')).getText();
  }
}
