import { KwetterFrontendPage } from './app.po';

describe('kwetter-frontend App', function() {
  let page: KwetterFrontendPage;

  beforeEach(() => {
    page = new KwetterFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
