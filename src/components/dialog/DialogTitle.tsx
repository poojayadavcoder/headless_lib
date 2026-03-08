interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function DialogTitle({ children, className, style, ...props }: DialogTitleProps) {
  return (
    <h2 
      {...props}
      className={className} 
      style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, ...style }}
    >
      {children}
    </h2>
  )
}
