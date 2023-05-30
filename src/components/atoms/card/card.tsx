import Conditional from "@/components/molecules/conditional"

interface CardProps {
  width?: string,
  padding?: string,
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  width = "flex-0",
  padding,
  children,
}) => {
  // mx-auto md:flex-0 shrink-0 md:w-9/12
  return (
    <div className={width + " w-full max-w-full px-3"}>
      <div className={padding + " relative flex flex-col flex-auto min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border"}>
        {children}
      </div>
    </div>
  )
}

export default Card
