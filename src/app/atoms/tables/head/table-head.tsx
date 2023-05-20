interface TableHeadProps {
  children: React.ReactNode
}

const TableHead: React.FC<TableHeadProps> = ({ children }) => {
  return (
    <thead className="align-bottom">
      <tr>{children}</tr>
    </thead>
  )
}

export default TableHead
