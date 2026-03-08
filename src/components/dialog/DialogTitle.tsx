export function DialogTitle({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={className} style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>
      {children}
    </h2>
  )
}
