import { MeanAppA2Page } from './app.po';

describe('mean-app-a2 App', function() {
  let page: MeanAppA2Page;

  beforeEach(() => {
    page = new MeanAppA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
