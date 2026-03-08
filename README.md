# Headless UI Library

A premium, accessible, and tree-shakable headless UI library for React.

## 🚀 Installation

```bash
npm install @py15/headless-kit
```

## 📖 Usage

### Dialog (Modal)
```tsx
import { Dialog } from '@py15/headless-kit';

function App() {
  return (
    <Dialog>
      <Dialog.Trigger>Open Modal</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Settings</Dialog.Title>
        <p>Accessible modal content with focus trapping and portal rendering.</p>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog>
  );
}
```

### Dropdown Menu
```tsx
import { Dropdown } from '@yourname/headless-kit';

function App() {
  return (
    <Dropdown>
      <Dropdown.Trigger>Options</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item onSelect={() => console.log('Edit')}>Edit</Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log('Delete')}>Delete</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
```

### Tabs
```tsx
import { Tabs } from '@py15/headless-kit';

function App() {
  return (
    <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Account settings...</Tabs.Content>
      <Tabs.Content value="password">Change password...</Tabs.Content>
    </Tabs>
  );
}
```

### Accordion
```tsx
import { Accordion } from '@py15/headless-kit';

function App() {
  return (
    <Accordion defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>Content 1...</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Section 2</Accordion.Trigger>
        <Accordion.Content>Content 2...</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

## 🏗️ Architecture

This library follows the **Compound Component Pattern**, providing maximum flexibility while maintaining internal state management. We use the **React Context API** to share logic between components like Triggers, Content, and Items.

### Key Principles:
- **Headless**: No default styles, giving you full control over the look and feel.
- **Tree-shakable**: Only include the components you use in your final bundle.
- **Controlled & Uncontrolled**: All components support both `value`/`onValueChange` and `defaultValue` patterns.

## ♿ Accessibility

Accessibility is a first-class citizen in this library:
- **Portals**: Dialogs and Dropdowns render to the body to avoid stacking context issues.
- **Focus Management**: Automatic focus trapping in modals and focus restoration on close.
- **Keyboard Navigation**: Full support for arrow keys, Escape key, and Home/End in menus and lists.
- **ARIA Attributes**: Proper roles (`dialog`, `menu`, `tablist`, etc.) and states (`aria-expanded`, `aria-selected`) are handled automatically.

## 🧪 Testing

### Storybook
To interact with components in isolation:
```bash
npm run storybook
```

### Cypress
To run end-to-end tests:
```bash
npx cypress open
```
