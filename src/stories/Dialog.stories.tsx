import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "../components/dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "A headless dialog component with a trigger and content. Supports controlled and uncontrolled state with focus trap and portal.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setOpen(true)}>Open Dialog</button>

        <Dialog open={open} onOpenChange={setOpen}>
          <Dialog.Content>
            <Dialog.Title>Dialog Example</Dialog.Title>
            <p>The dialog is now open!</p>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog>

        {/* Visual feedback */}
        <p>Dialog is currently: {open ? "Open" : "Closed"}</p>
      </div>
    );
  },
};