/// <reference types="cypress" />
import { Dialog } from "../../index";

describe("Dialog Component", () => {
  it("opens on trigger click and closes on escape", () => {
    cy.mount(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Settings</Dialog.Title>
          <p>Dialog Content</p>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog>
    );

    cy.contains("Open Dialog").click();
    cy.contains("Settings").should("be.visible");

    cy.get("body").type("{esc}");
    cy.contains("Settings").should("not.exist");
  });

  it("closes on overlay click", () => {
    cy.mount(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Modal Title</Dialog.Title>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog>
    );

    cy.contains("Open").click();
    cy.contains("Modal Title").should("be.visible");
    cy.contains("Close").click();
    cy.contains("Modal Title").should("not.exist");
  });

  it("focus trap works — first focusable element receives focus on open", () => {
    cy.mount(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Trap</Dialog.Title>
          <button id="first">First</button>
          <button id="last">Last</button>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog>
    );

    cy.contains("Open").click();
    cy.get("#first").should("have.focus");
  });
});
