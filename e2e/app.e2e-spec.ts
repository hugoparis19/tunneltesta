import { TunnelAPage } from './app.po';

describe('tunnel-a App', () => {
  let page: TunnelAPage;

  beforeEach(() => {
    page = new TunnelAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('yuc works!');
  });
});
