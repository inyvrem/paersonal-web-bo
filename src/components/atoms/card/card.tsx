interface CardProps {
  extraClassName?: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ extraClassName = "", children }) => {
  // mx-auto md:flex-0 shrink-0 md:w-9/12
  return (
    <div
      className={
        "relative flex-auto flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border " +
        extraClassName
      }
    >
      {children}
    </div>
  )
}

export default Card
