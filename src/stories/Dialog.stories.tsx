
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
    return (
      <div className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
        <Dialog>
          <Dialog.Trigger className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-indigo-100">
            Open Interactive Modal
          </Dialog.Trigger>
          <Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl z-[101]">
            <Dialog.Title className="text-3xl font-black text-slate-900 mb-4 tracking-tight">System Message</Dialog.Title>
            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              This dialog is managed entirely by the components. No manual `useState(open)` is required.
            </p>
            <Dialog.Close className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors focus:ring-4 focus:ring-slate-200 outline-none">
              Got it, thanks!
            </Dialog.Close>
          </Dialog.Content>
        </Dialog>
      </div>
    );
  },
};