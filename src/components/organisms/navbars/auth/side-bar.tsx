"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Constant } from "@/lib/constants/constant"
import { RouteConstant } from "@/lib/constants/route-constant"
import { IconConstant } from "@/lib/constants/icon-constant"
import SidebarSection from "@/components/molecules/side-bar/side-bar-section"
import SidebarRootItem from "@/components/molecules/side-bar/side-bar-root-item"
import SidebarRootDisclosureItem from "@/components/molecules/side-bar/side-bar-root-disclosure-item"
import SidebarChildItem from "@/components/molecules/side-bar/side-bar-child-item"
import SidebarChildDisclosureItem from "@/components/molecules/side-bar/side-bar-child-disclosure-item"

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const currentPath: string = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto transition-all duration-200 -translate-x-full bg-white border-0 shadow-none xl:ml-4 dark:bg-gray-950 ease-soft-in-out z-990 max-w-64 rounded-2xl xl:translate-x-0 xl:bg-transparent">
      <div className="h-20">
        <FontAwesomeIcon
          icon={IconConstant.TIMES}
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
            <Link href={RouteConstant.HOME}>
              <SidebarRootItem
                title={Constant.SIDE_BAR_DASHBOARD_TITLE}
                icon={IconConstant.HOME}
                isActive={currentPath === RouteConstant.HOME}
              />
            </Link>
          </li>
          <li className="mt-4 w-full">
            <SidebarSection title={Constant.SIDE_BAR_PAGES_TITLE} />
          </li>
          <li className="mt-0.5 w-full">
            <SidebarRootDisclosureItem
              title={Constant.SIDE_BAR_PAGES_TITLE}
              icon={IconConstant.PAGES}
              isActive={currentPath.includes(RouteConstant.PAGES)}
            >
              <SidebarChildDisclosureItem
                title={"Home"}
                isActive={currentPath.includes("home")}
              >
                <SidebarChildItem
                  title={"Home " + Constant.SIDE_BAR_OVERVIEW_TITLE}
                  link={RouteConstant.PAGES + "home"}
                  isActive={currentPath === RouteConstant.PAGES + "home"}
                />
                <SidebarChildItem
                  title={Constant.SIDE_BAR_ALL_SECTIONS_TITLE}
                  link={
                    RouteConstant.PAGES + "home" + RouteConstant.ALL_SECTIONS
                  }
                  isActive={currentPath.includes(
                    RouteConstant.PAGES + "home" + RouteConstant.ALL_SECTIONS
                  )}
                />
                {/* <SidebarChildItem
                  title={"React Beautiful DND Demo"}
                  link={RouteConstant.PAGES + "home" + "/react-beautiful-dnd-demo"}
                  isActive={currentPath === RouteConstant.PAGES + "home"}
                /> */}
              </SidebarChildDisclosureItem>
            </SidebarRootDisclosureItem>
          </li>
          <li className="mt-4 w-full">
            <SidebarSection title={Constant.SIDE_BAR_ADMIN_TITLE} />
          </li>
          <li className="mt-0.5 w-full">
            <SidebarRootDisclosureItem
              title={Constant.SIDE_BAR_USERS_TITLE}
              icon={IconConstant.USERS}
              isActive={currentPath.includes(RouteConstant.USERS)}
            >
              <SidebarChildItem
                title={Constant.SIDE_BAR_ALL_USERS_TITLE}
                link={RouteConstant.ALL_USERS}
                isActive={currentPath.includes(RouteConstant.ALL_USERS)}
                bullet
              />
              <SidebarChildItem
                title={Constant.SIDE_BAR_CREATE_USER_TITLE}
                link={RouteConstant.CREATE_USER}
                isActive={currentPath === RouteConstant.CREATE_USER}
                bullet
              />
            </SidebarRootDisclosureItem>
            <Link href={""}>
              <SidebarRootItem
                title={Constant.SIDE_BAR_SITES_TITLE}
                icon={IconConstant.HOME}
              />
            </Link>
          </li>
          <li className="mt-4 w-full">
            <SidebarSection title={Constant.SIDE_BAR_DOCS_TITLE} />
          </li>
          <li className="mt-0.5 w-full">

          </li>
          <li className="mt-4 w-full">
            <SidebarSection title={Constant.SIDE_BAR_HELP_TITLE} />
          </li>
          <li className="mt-0.5 w-full">

          </li>
          <li className="mt-4 w-full">
            <SidebarSection title={Constant.SIDE_BAR_ISSUES_TITLE} />
          </li>
          <li className="mt-0.5 w-full">

          </li>
        </ul>
      </div>
      {/* <div className="pt-4 mx-4 mt-4"></div> */}
    </aside>
  )
}

export default Sidebar
