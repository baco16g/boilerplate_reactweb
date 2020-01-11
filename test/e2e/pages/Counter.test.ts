import { getDocument, queries } from "pptr-testing-library";

describe("Counter", () => {
  const { getByTestId, getByText, getNodeText } = queries;

  beforeAll(async () => {
    page.setViewport({ width: 1200, height: 800 });
    await page.goto("http://localhost:8888/boilerplate_reactweb/");
  });

  it('should be Heading "Sync Counter"', async () => {
    await page.waitFor(1000);
    const h1 = await page.$eval("h1", el => el.textContent);
    await expect(h1).toBe("Sync Counter");
  });

  it("the initial value should be 0", async () => {
    const $document = await getDocument(page);
    const $count = await getByTestId($document, "count");
    const count = await getNodeText($count);
    await expect(count).toBe("Count: 0");
  });

  it("should count up by one, when you press the [INCREMENT] button", async () => {
    const $document = await getDocument(page);
    const getCount = async () => {
      const $count = await getByTestId($document, "count");
      const count = await getNodeText($count);
      return count;
    };
    await expect(await getCount()).toBe("Count: 0");
    const $increment = await getByText($document, "INCREMENT");
    $increment.click();
    await page.waitFor(100);
    await expect(await getCount()).toBe("Count: 1");
  });

  test("should save a count to sessionStorage", async () => {
    const getCountInStorage = () =>
      page.evaluate(() => sessionStorage.getItem(`${location.hostname}-counter-provider`));
    await expect(await getCountInStorage()).toBeNull();
    const $document = await getDocument(page);
    const $save = await getByText($document, "SAVE");
    $save.click();
    await page.waitFor(100);
    await expect(await getCountInStorage()).toBe(JSON.stringify({ count: 1 }));
  });
});
