/// <reference types="cypress" />
import { Dropdown } from "../../index";

describe("Dropdown Component", () => {
  it("opens on trigger click", () => {
    cy.mount(
      <Dropdown>
        <Dropdown.Trigger>Options</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );

    cy.contains("Options").click();
    cy.contains("Item 1").should("be.visible");
  });

  it("arrow keys change selection", () => {
    cy.mount(
      <Dropdown>
        <Dropdown.Trigger>Options</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );

    cy.contains("Options").click();
    cy.contains("Item 1").should("have.focus");
    cy.focused().type("{downarrow}");
    cy.contains("Item 2").should("have.focus");
  });

  it("outside click closes menu", () => {
    cy.mount(
      <div>
        <Dropdown>
          <Dropdown.Trigger>Options</Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item>Item 1</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </div>
    );

    cy.contains("Options").click();
    cy.contains("Item 1").should("be.visible");
    cy.get("body").click(0, 0);
    cy.contains("Item 1").should("not.exist");
  });
});
