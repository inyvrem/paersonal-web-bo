interface SidebarSectionProps {
  title: string
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title }) => {
  return (
    <h6 className="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60 dark:text-white">
      {title}
    </h6>
  )
}

export default SidebarSection
