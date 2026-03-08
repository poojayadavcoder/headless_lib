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
    return (
      <div className="max-w-md mx-auto p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
        <Tabs defaultValue="tab1" className="w-full">
          <Tabs.List className="flex p-1 bg-slate-200 rounded-xl gap-1">
            <Tabs.Trigger 
              value="tab1" 
              className="flex-1 px-4 py-2 text-sm font-bold rounded-lg transition-all
                        data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm
                        text-slate-500 hover:text-slate-700 outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Account
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="tab2" 
              className="flex-1 px-4 py-2 text-sm font-bold rounded-lg transition-all
                        data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm
                        text-slate-500 hover:text-slate-700 outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Security
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="tab1" className="mt-4 p-5 bg-white border border-slate-100 rounded-xl text-slate-600 leading-relaxed shadow-sm">
            Account settings content. Managed by internal state. Use Arrows to switch.
          </Tabs.Content>
          <Tabs.Content value="tab2" className="mt-4 p-5 bg-white border border-slate-100 rounded-xl text-slate-600 leading-relaxed shadow-sm">
            Security settings content. Works out of the box.
          </Tabs.Content>
        </Tabs>
      </div>
    );
  },
};