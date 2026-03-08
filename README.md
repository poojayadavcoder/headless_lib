# @py15/headless-kit

A premium, accessible, and tree-shakable headless UI library for React.

## 🔗 Project Links

- **GitHub Repository**: [https://github.com/poojayadavcoder/headless_lib](https://github.com/poojayadavcoder/headless_lib.git)
- **NPM Package**: [https://www.npmjs.com/package/@py15/headless-kit](https://www.npmjs.com/package/@py15/headless-kit)

## 🚀 Quick Start

### Installation

```bash
npm install @py15/headless-kit
```

## 📖 Component Usage

### Dialog
```tsx
import { Dialog } from '@py15/headless-kit';

export function Example() {
  return (
    <Dialog>
      <Dialog.Trigger className="btn">Open Modal</Dialog.Trigger>
      <Dialog.Overlay className="overlay" />
      <Dialog.Content className="content">
        <Dialog.Title>System Message</Dialog.Title>
        <p>Accessible modal with focus trapping.</p>
        <Dialog.Close className="close-btn">Close</Dialog.Close>
      </Dialog.Content>
    </Dialog>
  );
}
```

### Dropdown Menu
```tsx
import { Dropdown } from '@py15/headless-kit';

export function Example() {
  return (
    <Dropdown>
      <Dropdown.Trigger className="trigger">Open Menu</Dropdown.Trigger>
      <Dropdown.Content className="menu">
        <Dropdown.Item onSelect={() => console.log('Action')}>Action</Dropdown.Item>
        <Dropdown.Item onSelect={() => console.log('Settings')}>Settings</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
```

## 🛠️ Development & Running Locally

### 1. Library Development
To work on the library itself:
```bash
# Install dependencies
npm install

# Start Storybook for component development
npm run storybook

# Build the library (outputs to dist/)
npm run build
```

### 2. Running the Demo App
A Vite + Tailwind demo app is located in the `demo/` folder:
```bash
cd demo
npm install
npm run dev
```

## 🧪 Testing

### Unit & Interaction Tests (Vitest)
Runs tests for components and Storybook interactions:
```bash
npm run test
```

### End-to-End Tests (Cypress)
To run component testing via Cypress:
```bash
# Open Cypress UI
npm run cypress:open

# Run Cypress headless
npm run cypress:run
```

## 🏗️ Architecture & Accessibility

This library follows the **Compound Component Pattern**, built with the **React Context API** for seamless state sharing.

- **Headless**: Completely unstyled for maximum customizability.
- **Accessible**: Implements WAI-ARIA patterns, focus management, and keyboard navigation (including typeahead in menus).
- **Modern**: Built with TypeScript and Vite, fully tree-shakable.
