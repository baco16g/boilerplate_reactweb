
import * as React from 'react';
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import 'jest-styled-components'
import AsyncCounter from '../AsyncCounter';

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<AsyncCounter />);
  expect(asFragment()).toMatchSnapshot();
});
