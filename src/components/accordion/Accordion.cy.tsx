/// <reference types="cypress" />
import Accordion from "./index";

describe("Accordion Component", () => {
  it("single expand mode opens and collapses items", () => {
    cy.mount(
      <Accordion defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Trigger 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Trigger 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    cy.contains("Content 1").should("be.visible");
    cy.contains("Content 2").should("not.exist");

    cy.contains("Trigger 2").click();
    cy.contains("Content 2").should("be.visible");
    cy.contains("Content 1").should("not.exist");
  });

  it("multiple expand mode keeps all opened items visible", () => {
    cy.mount(
      <Accordion defaultValue={["item-1"]}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Trigger 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Trigger 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    cy.contains("Content 1").should("be.visible");
    cy.contains("Trigger 2").click();
    cy.contains("Content 1").should("be.visible");
    cy.contains("Content 2").should("be.visible");
  });
});
