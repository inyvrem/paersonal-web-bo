interface ConditionalProps {
  show: boolean
  children: React.ReactNode
}

const Conditional: React.FC<ConditionalProps> = ({ show, children }) => {
  if (show) return <>{children}</>
  return <></>
}

export default Conditional