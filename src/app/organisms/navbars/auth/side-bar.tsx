"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Constant } from "@/utils/constants/constant"
import { Route } from "@/utils/constants/route"
import { Icon } from "@/utils/constants/icon"
import SidebarSection from "@/app/molecules/side-bar/side-bar-section"
import SidebarRootItem from "@/app/molecules/side-bar/side-bar-root-item"
import SidebarRootDisclosureItem from "@/app/molecules/side-bar/side-bar-root-disclosure-item"
import SidebarChildItem from "@/app/molecules/side-bar/side-bar-child-item"
import SidebarChildDisclosureItem from "@/app/molecules/side-bar/side-bar-child-disclosure-item"

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const currentPath: string = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto transition-all duration-200 -translate-x-full bg-white border-0 shadow-none xl:ml-4 dark:bg-gray-950 ease-soft-in-out z-990 max-w-64 rounded-2xl xl:translate-x-0 xl:bg-transparent">
      <div className="h-20">
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer w-3.5 text-slate-400 dark:text-white xl:hidden"
        />
        <a className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white">
          <Image
            className="inline-block h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-8 dark:hidden"
            src={
              "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/logo-ct-dark.png"
            }
            width={32}
            height={32}
            alt="main_logo"
          />
          <Image
            className="hidden h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-8 dark:inline-block"
            src={
              "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/logo-ct.png"
            }
            width={32}
            height={32}
            alt="main_logo"
          />
          <span className="ml-1 font-semibold transition-all duration-200 ease-soft-in-out">
            Admin Dashboard
          </span>
        </a>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <div className="items-center block w-full h-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <li className="mt-0.5 w-full">
            <Link href={Route.HOME}>
              <SidebarRootItem
                title={Constant.SIDE_BAR_DASHBOARD_TITLE}
                icon={Icon.HOME}
                isActive={currentPath === Route.HOME}
              />
            </Link>
          </li>
          <li className="mt-4 w-full">
            <SidebarSection title={Constant.SIDE_BAR_PAGES_TITLE} />
          </li>
          <li className="mt-0.5 w-full">
            <SidebarRootDisclosureItem
              title={Constant.SIDE_BAR_PAGES_TITLE}
              icon={Icon.PAGES}
              isActive={currentPath.includes(Route.PAGES)}
            >
              <SidebarChildDisclosureItem
                title={"Home"}
                isActive={currentPath.includes("home")}
              >
                <SidebarChildItem
                  title={"Home " + Constant.SIDE_BAR_OVERVIEW_TITLE}
                  link={Route.PAGES + "home"}
                  isActive={
                    currentPath === Route.PAGES + "home"
                  }
                />
                <SidebarChildItem
                  title={Constant.SIDE_BAR_ALL_SECTIONS_TITLE}
                  link={Route.PAGES + "home" + Route.SECTIONS}
                  isActive={
                    currentPath === Route.PAGES + "home" + Route.SECTIONS
                  }
                />
                <SidebarChildItem
                  title={Constant.SIDE_BAR_NEW_SECTION_TITLE}
                  link={Route.PAGES + "home" + Route.NEW_SECTION}
                  isActive={
                    currentPath === Route.PAGES + "home" + Route.NEW_SECTION
                  }
                />
              </SidebarChildDisclosureItem>
            </SidebarRootDisclosureItem>
          </li>
        </ul>
      </div>
      {/* <div className="pt-4 mx-4 mt-4"></div> */}
    </aside>
  )
}

export default Sidebar
