/// <reference types="cypress" />
import { Tabs } from "../../index";

describe("Tabs Component", () => {
  it("switching tabs updates content", () => {
    cy.mount(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>
    );

    cy.contains("Content 1").should("be.visible");
    cy.contains("Content 2").should("not.exist");

    cy.contains("Tab 2").click();
    cy.contains("Content 2").should("be.visible");
    cy.contains("Content 1").should("not.exist");
  });

  it("keyboard navigation with arrow keys", () => {
    cy.mount(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>
    );

    cy.contains("Tab 1").focus().type("{rightarrow}");
    cy.contains("Content 2").should("be.visible");

    cy.focused().type("{leftarrow}");
    cy.contains("Content 1").should("be.visible");
  });
});
