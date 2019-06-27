import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import MatchMedia from './MatchMedia';

describe('MatchMedia', function () {
  let page;

  beforeEach(function () {
    page = ReactTestUtils.renderIntoDocument(
      <MatchMedia mediaQuery={'(min-width: 500px)'}>
        <div className="testDiv" />
      </MatchMedia>);
  });

  it('renders when window size >= 500px', function () {
    const testElement = ReactTestUtils.findRenderedDOMComponentWithClass(page, 'testDiv');
    expect(testElement).toBeDefined();
  });
});
