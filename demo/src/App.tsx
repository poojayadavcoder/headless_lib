// App.tsx
import { Dialog, Dropdown, Tabs, Accordion } from "@py15/headless-kit";
import React from "react";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-indigo-600">
            Headless UI Kit
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A beautiful, unstyled, accessible component library built with React.
          </p>
        </header>

        <main className="grid gap-12 sm:grid-cols-2">
          {/* Accordion Demo */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2 text-slate-800">Accordion</h2>
            <Accordion className="w-full border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 shadow-sm">
              <Accordion.Item value="item-1">
                <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-700 hover:bg-slate-50 transition-all bg-white group">
                  <span>Is it accessible?</span>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Accordion.Trigger>
                <Accordion.Content className="px-5 py-4 text-slate-600 bg-slate-50/50 leading-relaxed border-t border-slate-100">
                  Yes. It follows WAI-ARIA design patterns.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-slate-700 hover:bg-slate-50 transition-all bg-white group">
                  <span>Is it easily styled?</span>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Accordion.Trigger>
                <Accordion.Content className="px-5 py-4 text-slate-600 bg-slate-50/50 leading-relaxed border-t border-slate-100">
                  Absolutely! Use CSS, Tailwind, or any styling solution.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </section>

          {/* Dialog Demo (self-controlled) */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2 text-slate-800">Dialog</h2>
            <Dialog>
              <Dialog.Trigger className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                Open Dialog
              </Dialog.Trigger>
              <Dialog.Overlay className="bg-gray-400/30" />
              <Dialog.Content>
                  <Dialog.Title>Dialog Test</Dialog.Title>
                  <p>Your dialog is working without useState!</p>
                  <Dialog.Close className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded-lg">
                    Close
                  </Dialog.Close>
              </Dialog.Content>
            </Dialog>
          </section>

          {/* Dropdown Demo */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2 text-slate-800">Dropdown</h2>
            <Dropdown className="relative inline-block text-left">
              <Dropdown.Trigger className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]">
                <span>Options</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Dropdown.Trigger>
              <Dropdown.Content className="absolute left-0 mt-2 w-56 p-1.5 bg-white border border-slate-100 rounded-xl shadow-xl shadow-indigo-100/50 z-50 focus:outline-none overflow-hidden">
                <Dropdown.Item className="flex items-center w-full px-3 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-pointer outline-none">
                  Account settings
                </Dropdown.Item>
                <Dropdown.Item className="flex items-center w-full px-3 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-pointer outline-none">
                  Support
                </Dropdown.Item>
                <Dropdown.Item className="flex items-center w-full px-3 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-pointer outline-none">
                  License
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </section>

          {/* Tabs Demo */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2 text-slate-800">Tabs</h2>
            <Tabs defaultValue="tab1" className="w-full">
              <Tabs.List className="flex p-1 bg-slate-100 rounded-xl gap-1">
                <Tabs.Trigger 
                  value="tab1" 
                  className="flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all
                            data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm
                            text-slate-500 hover:text-slate-700 hover:bg-white/50"
                >
                  Tab 1
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value="tab2" 
                  className="flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all
                            data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm
                            text-slate-500 hover:text-slate-700 hover:bg-white/50"
                >
                  Tab 2
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab1" className="mt-4 p-4 bg-white border border-slate-100 rounded-xl text-slate-600 leading-relaxed shadow-sm">
                Content for the first tab. It's clean, accessible, and looks great with zero effort.
              </Tabs.Content>
              <Tabs.Content value="tab2" className="mt-4 p-4 bg-white border border-slate-100 rounded-xl text-slate-600 leading-relaxed shadow-sm">
                Content for the second tab. The styling is perfectly consistent with the rest of the UI kit.
              </Tabs.Content>
            </Tabs>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;