import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe to group together similar test
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // ----------------------------------------------------------

  // use 'it' to test a single attribute of target
  it('shows a comment box', () => {
    // use 'expect' to make a 'assertion' about a target
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    // use 'expect' to make a 'assertion' about a target
    expect(component.find('.comment-list')).to.exist;
  });

});
