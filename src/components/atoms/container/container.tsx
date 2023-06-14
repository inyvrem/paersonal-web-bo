interface ContainerProps {
  extraClassName?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  extraClassName = "",
  children,
}) => {
  // mx-auto md:flex-0 shrink-0 md:w-9/12
  return (
    <div className={"w-full max-w-full px-3 flex-0 " + extraClassName}>
      {children}
    </div>
  )
}

export default Container
