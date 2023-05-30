interface TableProps {
  children: React.ReactNode
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 dark:border-white/40">
      {children}
    </table>
  )
}

export default Table
