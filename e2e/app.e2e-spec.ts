import { SoledadPage } from './app.po';

describe('soledad App', function() {
  let page: SoledadPage;

  beforeEach(() => {
    page = new SoledadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
