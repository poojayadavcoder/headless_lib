import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown component with a trigger and selectable items. Visual feedback shows the currently selected item.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
      <div>
        <Dropdown>
          <Dropdown.Trigger>Open Menu</Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => setSelected('Profile')}>Profile</Dropdown.Item>
            <Dropdown.Item onSelect={() => setSelected('Settings')}>Settings</Dropdown.Item>
            <Dropdown.Item onSelect={() => setSelected('Logout')}>Logout</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>

        {/* Visual feedback */}
        {selected && <p style={{ marginTop: 10 }}>You selected: {selected}</p>}
      </div>
    );
  },
};