import { useTabs } from "./context"

type TabsContentProps = {
  value: string
  children: React.ReactNode
  className?: string
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { value: activeTab } = useTabs()

  if (activeTab !== value) return null

  return <div role="tabpanel" className={className}>{children}</div>
}