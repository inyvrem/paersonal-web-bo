"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid"

interface SidebarRootDisclosureItemProps {
  title: string
  icon: IconDefinition
  isActive: boolean
  children: React.ReactNode
}

const SidebarRootDisclosureItem: React.FC<SidebarRootDisclosureItemProps> = ({
  title,
  icon,
  isActive = false,
  children,
}) => {
  return (
    <Disclosure as="div" className="my-0 mx-4">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={
              (isActive
                ? "xl:shadow-soft-xl bg-white font-semibold"
                : "font-normal") +
              " flex w-full items-center py-2.7 px-4 rounded-lg transition-all duration-200 ease-soft-in-out"
            }
          >
            <div
              className={
                (isActive ? "theme-color text-white" : "bg-white text-black") +
                " transition-colors duration-100 ease-soft-in-out shadow-soft-sm mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center"
              }
            >
              <FontAwesomeIcon icon={icon} className="w-3" />
            </div>
            <span className="ml-1 transition-all duration-300 ease-soft w-full text-left text-sm whitespace-nowrap opacity-100 pointer-events-none text-slate-700">
              {title}
            </span>
            {open ? (
              <ChevronUpIcon className="w-7 text-slate-900" />
            ) : (
              <ChevronDownIcon className="w-7 text-slate-900" />
            )}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel
              as="ul"
              className="flex flex-wrap text-sm text-slate-700 transition-all duration-200 ease-soft-in-out"
            >
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default SidebarRootDisclosureItem
