"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStore,
  faBars,
  faBarsStaggered,
  faGear,
  faMagnifyingGlass,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { Route } from "@/utils/constants/route"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const currentPath: string = usePathname()
  const paths: string[] = currentPath.split("/")
  const isRootPath: boolean = paths[1] === ""

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-6 shadow-none rounded-2xl lg:flex-nowrap lg:justify-start">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="leading-normal items-start text-sm">
              <a className="text-slate-700 opacity-30 dark:text-white">
                <FontAwesomeIcon icon={faStore} size="sm" />
              </a>
            </li>
            <li className="text-sm pl-2 capitalize leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/'] after:text-slate-700">
              <a className="opacity-50 text-slate-700 dark:text-white">
                {isRootPath ? "Dashboard" : paths[1]}
              </a>
            </li>
            <li className="text-sm pl-2 capitalize leading-normal text-slate-700 dark:text-white dark:before:text-white">
              <span
                className={
                  (isRootPath ? "hidden" : "inline-block") +
                  " float-left pr-2 text-gray-600"
                }
              >
                /
              </span>
              <span>{paths[2]}</span>
            </li>
          </ol>
          <h6 className="mb-0 font-bold capitalize dark:text-white">
            {isRootPath ? "Home" : paths[2]}
          </h6>
        </nav>
        <div className="hidden p-0 transition-all text-sm text-slate-500 xl:block">
          <FontAwesomeIcon icon={faBarsStaggered} className="overflow-hidden" />
        </div>
        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <div className="flex items-center md:ml-auto md:pr-4">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
              <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3.5" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
              />
            </div>
          </div>
          <ul className="flex flex-row justify-end items-center pl-0 mb-0 md-max:w-full">
            <li className="flex items-center">
              <Link
                href={Route.SIGN_IN}
                className="block transition-all px-0 py-2 font-semibold text-sm text-slate-500 dark:text-white"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="w-3 sm:mr-1.5" />
                  <span className="hidden sm:inline">Sign In</span>
                </div>
              </Link>
            </li>
            <li className="flex items-center pl-4 xl:hidden">
              <a className="block p-0 transition-all text-sm text-slate-500 dark:text-white">
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-3.5 overflow-hidden"
                />
              </a>
            </li>
            <li className="flex items-center px-4">
              <a className="p-0 transition-all text-sm text-slate-500 dark:text-white">
                <FontAwesomeIcon
                  icon={faGear}
                  className="w-3.5 overflow-hidden"
                />
              </a>
            </li>
            <li className="relative flex items-center pr-2">
              <a className="p-0 transition-all text-sm text-slate-500 dark:text-white">
                <FontAwesomeIcon
                  icon={faBell}
                  className="w-3.5 overflow-hidden"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
