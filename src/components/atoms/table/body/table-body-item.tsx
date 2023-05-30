interface TableBodyItemProps {
  className?: string
  dividerLine?: boolean
  children: React.ReactNode
}

const TableBodyItem: React.FC<TableBodyItemProps> = ({
  className = "",
  dividerLine = true,
  children,
}) => {
  return (
    <td
      className={
        className +
        (dividerLine ? " border-b " : "") +
        " p-2 align-middle bg-transparent dark:border-white/40"
      }
    >
      {children}
    </td>
  )
}

export default TableBodyItem
