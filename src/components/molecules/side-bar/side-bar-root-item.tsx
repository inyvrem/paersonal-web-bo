import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

interface SidebarRootItemProps {
  title: string
  icon: IconDefinition
  isActive: boolean
}

const SidebarRootItem: React.FC<SidebarRootItemProps> = ({
  title,
  icon,
  isActive = false,
}) => {
  return (
    <div className="my-0 mx-4">
      <div
        className={
          (isActive ? "xl:shadow-soft-xl bg-white font-semibold" : "") +
          " flex w-full items-center py-2.7 px-4 rounded-lg transition-all duration-200 ease-soft-in-out"
        }
      >
        {/* <div
          className={
            (isActive
              ? "bg-gradient-to-tl from-blue-600 to-sky-400 text-white"
              : "bg-white text-black") +
            " transition-colors duration-100 ease-soft-in-out stroke-none shadow-soft-sm mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center"
          }
        >
          <FontAwesomeIcon icon={icon} className="w-3" />
        </div> */}
        <div
          className={
            (isActive
              ? "theme-color text-white"
              : "bg-white text-black") +
            " transition-colors duration-100 ease-soft-in-out stroke-none shadow-soft-sm mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center"
          }
        >
          <FontAwesomeIcon icon={icon} className="w-3" />
        </div>
        <span className="ml-1 duration-250 ease-soft text-left text-sm whitespace-nowrap opacity-100 pointer-events-none text-slate-700">
          {title}
        </span>
      </div>
    </div>
  )
}

export default SidebarRootItem
