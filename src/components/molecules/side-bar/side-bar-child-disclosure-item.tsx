"use client"

import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid"

interface SidebarChildDisclosureItemProps {
  title: string
  isActive: boolean
  children: React.ReactNode
}

const SidebarChildDisclosureItem: React.FC<SidebarChildDisclosureItemProps> = ({
  title,
  isActive = false,
  children,
}) => {
  return (
    <Disclosure as="li" className="w-full my-0 mx-0">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={
              (isActive ? "font-semibold" : "") +
              " flex w-full items-center py-1.6 px-4 bg-transparent"
            }
          >
            <div className="bg-transparent mr-2 flex h-8 w-11 items-center justify-center bg-center p-2.5 text-center">
              <span className={isActive ? "text-4xl" : "text-2xl"}>•</span>
            </div>
            <span className="ml-0.5 transition-all duration-300 ease-soft w-full text-left text-sm whitespace-nowrap opacity-100 pointer-events-none text-slate-700">
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

export default SidebarChildDisclosureItem
