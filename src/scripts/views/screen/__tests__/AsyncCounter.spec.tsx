import * as React from 'react';
import {render, cleanup, fireEvent, waitForDomChange} from 'react-testing-library';
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

  it('should count up by one after about 1000ms, when you press the [ASYNC INCREMENT] button', async () => {
    const {getByText} = render(<AsyncCounter />);
    fireEvent.click(getByText('ASYNC INCREMENT')!);
    const count = getByText(/Count: \d+/);
    const startMs = new Date().getTime();
    await waitForDomChange({container: count});
    const elapsedMs = new Date().getTime() - startMs;
    expect(count).toHaveTextContent('1');
    expect(elapsedMs).toBeGreaterThanOrEqual(1000);
    expect(elapsedMs).toBeLessThan(1100);
  });

  test('should save a count to sessionStorage', async () => {
    const {getByText} = render(<AsyncCounter />);
    const count = getByText(/Count: \d+/);
    fireEvent.click(getByText('ASYNC INCREMENT')!);
    await waitForDomChange({container: count});
    expect(count).toHaveTextContent('1');
    fireEvent.click(getByText('SAVE'));
    expect(sessionStorage.__STORE__[COUNTER_STORAGE_KEY]).toBe(JSON.stringify({count: 1}));
  });
});
