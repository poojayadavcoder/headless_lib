import { useState } from 'react';
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
    const [open, setOpen] = useState<string>("item-1");
    return (
      <div>
        <Accordion value={open} onValueChange={setOpen}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Is it styled?</Accordion.Trigger>
            <Accordion.Content>No. It's unstyled by default, giving you full control.</Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <p style={{ marginTop: 10 }}>Currently open: {open}</p>
      </div>
    );
  },
};

export const InteractiveMultiple: Story = {
  render: () => {
    const [open, setOpen] = useState<string[]>([]);
    return (
      <div>
        <Accordion value={open} onValueChange={setOpen}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Multiple Item 1</Accordion.Trigger>
            <Accordion.Content>You can open multiple items at once.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Multiple Item 2</Accordion.Trigger>
            <Accordion.Content>Try opening both!</Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <p style={{ marginTop: 10 }}>Currently open: {open.join(', ') || 'None'}</p>
      </div>
    );
  },
};