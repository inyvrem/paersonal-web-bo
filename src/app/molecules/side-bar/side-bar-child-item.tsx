import Link from "next/link"
import { Route } from "@/utils/constants/route"
import Conditional from "../conditional"

interface SidebarChildItemProps {
  title: string
  link: string
  isActive?: boolean
  isBullet?: boolean
}

const SidebarChildItem: React.FC<SidebarChildItemProps> = ({
  title,
  link,
  isActive = false,
  isBullet = false,
}) => {
  return (
    <li className="flex w-full items-center py-0.5">
      <Link href={link} className="flex items-center">
        <div className="bg-transparent mr-2 flex h-8 w-11 items-center justify-center bg-center p-2.5 text-center">
          <Conditional show={isBullet}>
            <span
              className={
                (isActive ? "text-4xl -ml-0.5 mr-6" : "text-2xl mr-6.5") +
                "transition-all duration-300 ease-soft"
              }
            >
              •
            </span>
          </Conditional>
        </div>
        <div>
          <span
            className={
              (isActive
                ? "text-slate-800 font-semibold"
                : "text-slate-800/50 font-medium") +
              " transition-all duration-300 ease-soft w-full text-left text-sm whitespace-nowrap opacity-100 pointer-events-none"
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
