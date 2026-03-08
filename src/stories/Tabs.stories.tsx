import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "../components/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          "A tab component that supports controlled or uncontrolled state. Shows visual feedback for active tab.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
      <div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="tab1">
            <h3>Account</h3>
            <p>Make changes to your account here.</p>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <h3>Password</h3>
            <p>Change your password here.</p>
          </Tabs.Content>
        </Tabs>

        {/* Visual feedback */}
        <p style={{ marginTop: 10 }}>Currently active tab: {activeTab}</p>
      </div>
    );
  },
};