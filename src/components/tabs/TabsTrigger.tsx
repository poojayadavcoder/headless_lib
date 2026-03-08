import { useTabs } from "./context"

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export function TabsTrigger({ value, children, className, ...props }: TabsTriggerProps) {
  const { value: activeTab, setValue } = useTabs()

  const isActive = activeTab === value

  return (
    <button
      {...props}
      role="tab"
      aria-selected={isActive}
      className={className}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  )
}