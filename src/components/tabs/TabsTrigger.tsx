import { useTabs } from "./context"

type TabsTriggerProps = {
  value: string
  children: React.ReactNode
  className?: string
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { value: activeTab, setValue } = useTabs()

  const isActive = activeTab === value

  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={className}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  )
}