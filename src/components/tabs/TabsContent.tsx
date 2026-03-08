import { useTabs } from "./context"

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export function TabsContent({ value, children, className, ...props }: TabsContentProps) {
  const { value: activeTab } = useTabs()

  if (activeTab !== value) return null

  return <div {...props} role="tabpanel" className={className}>{children}</div>
}