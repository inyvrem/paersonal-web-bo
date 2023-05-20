interface TableBodyItemProps {
  className?: string
  isLastItem?: boolean
  children: React.ReactNode
}

const TableBodyItem: React.FC<TableBodyItemProps> = ({
  className = "",
  isLastItem = false,
  children,
}) => {
  return (
    <td
      className={
        className +
        (!isLastItem ? " border-b " : "") +
        " p-2 align-middle bg-transparent dark:border-white/40"
      }
    >
      {children}
    </td>
  )
}

export default TableBodyItem
