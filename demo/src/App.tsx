import { Dialog, Dropdown, Tabs, Accordion } from "@py15/headless-kit"
import { useState } from "react"
import "./index.css"

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-indigo-600">Headless UI Kit</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A beautiful, unstyled, accessible component library built with React.
          </p>
        </header>

        <main className="grid gap-12 sm:grid-cols-2">
          {/* Accordion Demo */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2 text-slate-800">Accordion</h2>
            <Accordion>
              <div className="space-y-2">
                <Accordion.Item value="item-1">
                  <Accordion.Trigger>
                    <div className="flex justify-between items-center w-full bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-lg font-medium transition-colors">
                      <span>Is it accessible?</span>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <div className="p-4 text-slate-600 bg-slate-50 border border-slate-100 rounded-lg mt-2">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-2">
                  <Accordion.Trigger>
                    <div className="flex justify-between items-center w-full bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-lg font-medium transition-colors">
                      <span>Is it easily styled?</span>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <div className="p-4 text-slate-600 bg-slate-50 border border-slate-100 rounded-lg mt-2">
                      Absolutely! You can use CSS, Tailwind CSS, or any styling solution you prefer.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            </Accordion>
          </section>

          {/* Dialog Demo */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2 text-slate-800">Dialog</h2>
            <div className="flex justify-center items-center h-40 bg-slate-50 rounded-lg border border-slate-100">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-sm"
              >
                Open Dialog
              </button>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
              <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
                <Dialog.Content className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl pointer-events-auto">
                  <Dialog.Title className="text-xl font-bold text-slate-900 mb-2">
                    Payment successful
                  </Dialog.Title>
                  <p className="text-slate-600 mb-6">
                    Your payment has been successfully submitted. We've sent you an email with all of the details of your order.
                  </p>
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                  >
                    Got it, thanks!
                  </button>
                </Dialog.Content>
              </div>
            </Dialog>
          </section>

          {/* Dropdown Demo */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2 text-slate-800">Dropdown</h2>
            <div className="flex justify-center items-start h-48 bg-slate-50 rounded-lg border border-slate-100 pt-6">
              <Dropdown>
                <Dropdown.Trigger>
                  <div className="bg-white border hover:bg-slate-50 text-slate-800 font-medium py-2.5 px-5 rounded-lg transition-colors shadow-sm inline-flex items-center gap-2">
                    Options
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                  </div>
                </Dropdown.Trigger>
                <Dropdown.Content className="bg-white border rounded-xl shadow-lg mt-2 min-w-[200px] p-1.5 z-10 absolute left-1/2 -translate-x-1/2">
                  <Dropdown.Item className="px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md cursor-pointer text-sm font-medium transition-colors">
                    Account settings
                  </Dropdown.Item>
                  <Dropdown.Item className="px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md cursor-pointer text-sm font-medium transition-colors">
                    Support
                  </Dropdown.Item>
                  <Dropdown.Item className="px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md cursor-pointer text-sm font-medium transition-colors">
                    License
                  </Dropdown.Item>
                  <div className="h-px bg-slate-100 my-1 mx-2"></div>
                  <Dropdown.Item className="px-3 py-2 hover:bg-red-50 text-red-600 rounded-md cursor-pointer text-sm font-medium transition-colors">
                    Sign out
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </section>

          {/* Tabs Demo */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2 text-slate-800">Tabs</h2>
            
            <Tabs defaultValue="tab1">
              <Tabs.List className="flex space-x-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/50">
                <Tabs.Trigger 
                  value="tab1" 
                  className="w-full py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-white/50 hover:text-slate-800 transition-all data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Account
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value="tab2" 
                  className="w-full py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-white/50 hover:text-slate-800 transition-all data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Password
                </Tabs.Trigger>
              </Tabs.List>
              <div className="mt-4 p-5 bg-slate-50 rounded-xl border border-slate-100 h-32 flex items-center justify-center">
                <Tabs.Content value="tab1" className="text-slate-600 font-medium animate-in fade-in duration-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md">
                  Make changes to your account here.
                </Tabs.Content>
                <Tabs.Content value="tab2" className="text-slate-600 font-medium animate-in fade-in duration-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md">
                  Change your password here.
                </Tabs.Content>
              </div>
            </Tabs>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
