import { Selector } from "testcafe";

fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`;

test("My first test", async t => {
  await t
    .typeText("#developer-name", "suusan2go")
    .click("#submit-button")
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, suusan2go!");
});
