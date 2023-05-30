interface TableBodyProps {
  children: React.ReactNode
}

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return (
    <tbody className="border-t-0 border-current border-solid dark:border-white/40">
      {children}
    </tbody>
  )
}

export default TableBody
