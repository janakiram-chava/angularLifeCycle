import { AngularLifeCyclePage } from './app.po';

describe('angular-life-cycle App', function() {
  let page: AngularLifeCyclePage;

  beforeEach(() => {
    page = new AngularLifeCyclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
