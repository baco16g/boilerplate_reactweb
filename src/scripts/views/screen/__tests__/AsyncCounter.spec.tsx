import * as React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import AsyncCounter, { STORAGE_KEY as COUNTER_STORAGE_KEY } from "../AsyncCounter";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<AsyncCounter />);
  expect(asFragment()).toMatchSnapshot();
});

describe("AsyncCounter", () => {
  it("the initial value should be 0", () => {
    const { getByText } = render(<AsyncCounter />);
    const count = getByText(/Count: \d+/);
    expect(count.textContent).toBe("Count: 0");
  });

  it("should count up by one after about 1000ms, when you press the [ASYNC INCREMENT] button", async () => {
    const { getByText } = render(<AsyncCounter />);
    fireEvent.click(getByText("ASYNC INCREMENT")!);
    const startMs = new Date().getTime();
    await waitFor(() => expect(getByText("Count: 1")), { timeout: 1100 });
    const elapsedMs = new Date().getTime() - startMs;
    expect(elapsedMs).toBeGreaterThanOrEqual(900);
    expect(elapsedMs).toBeLessThan(1100);
  });

  test("should save a count to sessionStorage", async () => {
    const { getByText } = render(<AsyncCounter />);
    fireEvent.click(getByText("ASYNC INCREMENT")!);
    await waitFor(() => expect(getByText("Count: 1")), { timeout: 1100 });
    fireEvent.click(getByText("SAVE"));
    expect(sessionStorage.__STORE__[COUNTER_STORAGE_KEY]).toBe(JSON.stringify({ count: 1 }));
  });
});
