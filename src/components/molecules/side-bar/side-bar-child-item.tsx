import Link from "next/link"
import Conditional from "../conditional"

interface SidebarChildItemProps {
  title: string
  link: string
  isActive: boolean
  bullet?: boolean
}

const SidebarChildItem: React.FC<SidebarChildItemProps> = ({
  title,
  link,
  isActive = false,
  bullet = false,
}) => {
  return (
    <li className="w-full my-0 mx-0">
      <Link href={link}>
        <div
          className={
            (isActive ? "font-semibold" : "") +
            " flex w-full items-center py-1.6 px-4 bg-transparent"
          }
        >
          <Conditional show={bullet}>
            <div className="bg-transparent mr-2 flex h-8 w-11 items-center justify-center bg-center p-2.5 text-center">
              <span className={isActive ? "text-4xl" : "text-2xl"}>•</span>
            </div>
          </Conditional>

          <span
            className={
              (bullet ? "ml-0.5" : "ml-12") +
              " mr-3 transition-all duration-300 ease-soft w-full text-left text-sm whitespace-nowrap opacity-100 pointer-events-none text-slate-700"
            }
          >
            {title}
          </span>
        </div>
      </Link>
    </li>
  )
}

export default SidebarChildItem
