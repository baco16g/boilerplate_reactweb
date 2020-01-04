import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import Counter, { STORAGE_KEY as COUNTER_STORAGE_KEY } from "../Counter";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});

describe("Counter", () => {
  it("the initial value should be 0", () => {
    const { getByText } = render(<Counter />);
    const count = getByText(/Count: \d+/);
    expect(count.textContent).toBe("Count: 0");
  });

  it("should count up by one, when you press the [INCREMENT] button", () => {
    const { getByText } = render(<Counter />);
    const count = getByText(/Count: \d+/);
    fireEvent.click(getByText("INCREMENT"));
    expect(count.textContent).toBe("Count: 1");
  });

  test("should save a count to sessionStorage", () => {
    const { getByText } = render(<Counter />);
    const count = getByText(/Count: \d+/);
    fireEvent.click(getByText("INCREMENT"));
    expect(count.textContent).toBe("Count: 1");
    fireEvent.click(getByText("SAVE"));
    expect(sessionStorage.__STORE__[COUNTER_STORAGE_KEY]).toBe(JSON.stringify({ count: 1 }));
  });
});
