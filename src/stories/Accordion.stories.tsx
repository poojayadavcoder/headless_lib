import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: "A simple accessible accordion component that supports single or multiple open items. Fully customizable styling.",
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const InteractiveSingle: Story = {
  render: () => {
    return (
      <div className="max-w-md mx-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <Accordion className="w-full border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 shadow-sm bg-white">
          <Accordion.Item value="item-1">
            <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-700 hover:bg-slate-50 transition-all bg-white focus:bg-slate-50 focus:text-indigo-600 outline-none">
              Is it accessible?
            </Accordion.Trigger>
            <Accordion.Content className="px-5 py-4 text-slate-600 bg-slate-50/50 leading-relaxed border-t border-slate-100">
              Yes. It adheres to the WAI-ARIA design pattern. Use Arrow Down/Up to navigate triggers.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-700 hover:bg-slate-50 transition-all bg-white focus:bg-slate-50 focus:text-indigo-600 outline-none">
              Is it styled?
            </Accordion.Trigger>
            <Accordion.Content className="px-5 py-4 text-slate-600 bg-slate-50/50 leading-relaxed border-t border-slate-100">
              No. It's unstyled by default, giving you full control over every pixel.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  },
};

export const InteractiveMultiple: Story = {
  render: () => {
    return (
      <div>
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Multiple Item 1</Accordion.Trigger>
            <Accordion.Content>You can open multiple items at once.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Multiple Item 2</Accordion.Trigger>
            <Accordion.Content>Try opening both!</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  },
};