
import * as React from 'react';
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import 'jest-styled-components'
import Counter from '../Counter';

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});
