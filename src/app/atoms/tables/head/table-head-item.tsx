interface TableHeadItemProps {
  className?: string
  title: string
}

const TableHeadItem: React.FC<TableHeadItemProps> = ({
  className = "",
  title,
}) => {
  return (
    <th
      className={
        className +
        " px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 dark:border-white/40 dark:text-white dark:opacity-80"
      }
    >
      {title}
    </th>
  )
}

export default TableHeadItem
