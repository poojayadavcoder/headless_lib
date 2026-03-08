
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
    return (
      <div className="h-64 flex flex-col items-center">
        <Dropdown className="relative inline-block text-left">
          <Dropdown.Trigger className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-all focus:ring-2 focus:ring-indigo-500 outline-none">
            Open Menu
          </Dropdown.Trigger>
          <Dropdown.Content className="absolute left-0 mt-2 w-56 p-2 bg-white border border-slate-100 rounded-xl shadow-xl z-50 focus:outline-none">
            <Dropdown.Item className="px-4 py-2 text-sm text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-pointer focus:bg-indigo-100 focus:text-indigo-800 outline-none">
              Profile
            </Dropdown.Item>
            <Dropdown.Item className="px-4 py-2 text-sm text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-pointer focus:bg-indigo-100 focus:text-indigo-800 outline-none">
              Settings
            </Dropdown.Item>
            <Dropdown.Item className="px-4 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer focus:bg-red-100 focus:text-red-800 outline-none">
              Logout
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </div>
    );
  },
};