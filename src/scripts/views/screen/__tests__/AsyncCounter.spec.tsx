import * as React from 'react';
import {render, cleanup, fireEvent, waitForElement} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import AsyncCounter, {STORAGE_KEY as COUNTER_STORAGE_KEY} from '../AsyncCounter';

afterEach(cleanup);

it('matches snapshot', () => {
  const {asFragment} = render(<AsyncCounter />);
  expect(asFragment()).toMatchSnapshot();
});

describe('AsyncCounter', () => {
  it('the initial value should be 0', () => {
    const {getByText} = render(<AsyncCounter />);
    const count = getByText(/Count: \d+/);
    expect(count).toHaveTextContent('0');
  });

  it('should count up by one, when you press the [ASYNC INCREMENT] button', async () => {
    const {getByText} = render(<AsyncCounter />);
    fireEvent.click(getByText('ASYNC INCREMENT'));
    const count = await waitForElement(() => getByText('Count: 1'));
    expect(count).toHaveTextContent('1');
  });

  test('should save a count to sessionStorage', async () => {
    const {getByText} = render(<AsyncCounter />);
    fireEvent.click(getByText('ASYNC INCREMENT'));
    const count = await waitForElement(() => getByText('Count: 1'));
    expect(count).toHaveTextContent('1');
    fireEvent.click(getByText('SAVE'));
    expect(sessionStorage.__STORE__[COUNTER_STORAGE_KEY]).toBe(JSON.stringify({count: 1}));
  });
});
