import Button from "./Button";
describe("Button component", () => {
  beforeEach(() => {
    cy.mount(<Button className="custom-class">Click me</Button>);
  });
  it("renders the button with the provided children", () => {
    cy.get("button").contains("Click me").should("be.visible");
  });

  it("applies the provided className to the button", () => {
    cy.get("button").should("have.class", "custom-class");
  });
});
