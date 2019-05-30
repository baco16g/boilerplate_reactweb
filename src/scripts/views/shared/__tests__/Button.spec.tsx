
import * as React from 'react';
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import 'jest-styled-components'
import Button from '../Button';

afterEach(cleanup);

it("matches snapshot", () => {
  const onPress = (e: any) => console.log(e)
  const { asFragment } = render(<Button label="Press!!" onPress={onPress} />);
  expect(asFragment()).toMatchSnapshot();
});
