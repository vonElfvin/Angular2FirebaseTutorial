import { Angular2FirebaseTutorialPage } from './app.po';

describe('angular2-firebase-tutorial App', () => {
  let page: Angular2FirebaseTutorialPage;

  beforeEach(() => {
    page = new Angular2FirebaseTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
