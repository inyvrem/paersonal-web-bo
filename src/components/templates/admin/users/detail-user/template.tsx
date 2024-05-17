import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "@/components/atoms/card/card"
import { IconConstant } from "@/lib/constants/icon-constant"
import PasswordRequirementsComponent from "@/components/molecules/password-requirements"

interface DetailUserPageTemplateProps {
  params: { user: string }
}

const DetailUserPageTemplate: React.FC<DetailUserPageTemplateProps> = ({
  params,
}) => {
  const { user } = params
  return (
    <div className="flex flex-wrap mb-12 -mx-3">
      <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-3/12">
        <Card extraClassName="sticky top-0">
          <ul className="flex flex-col flex-wrap p-4 mb-0 list-none rounded-xl">
            <li>
              <Link
                href={""}
                className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200"
              >
                <div className="inline-block mr-3 text-black fill-current h-4 w-4 stroke-none">
                  <FontAwesomeIcon icon={IconConstant.ROCKET} />
                </div>
                <span className="leading-normal text-sm dark:text-white">
                  Profile
                </span>
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href={""}
                className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200"
              >
                <div className="inline-block mr-3 text-black fill-current h-4 w-4 stroke-none">
                  <FontAwesomeIcon icon={IconConstant.BOOK} />
                </div>
                <span className="leading-normal text-sm dark:text-white">
                  Basic Info
                </span>
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href={""}
                className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200"
              >
                <div className="inline-block mr-3 text-black fill-current h-4 w-4 stroke-none">
                  <FontAwesomeIcon icon={IconConstant.SHIELD} />
                </div>
                <span className="leading-normal text-sm dark:text-white">
                  Change Password
                </span>
              </Link>
            </li>
            <li className="pt-2">
              <div className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200">
                <div className="inline-block mr-3 text-black fill-current h-4 w-4 stroke-none">
                  <FontAwesomeIcon icon={IconConstant.CUBE} />
                </div>
                <span className="leading-normal text-sm dark:text-white">
                  Sites
                </span>
              </div>
            </li>
            <li className="pt-2">
              <Link
                href={""}
                className="block px-4 py-2 transition-colors rounded-lg ease-soft-in-out text-slate-500 hover:bg-gray-200"
              >
                <div className="inline-block mr-3 text-black fill-current h-4 w-4 stroke-none">
                  <FontAwesomeIcon icon={IconConstant.TRASH} />
                </div>
                <span className="leading-normal text-sm dark:text-white">
                  Delete Account
                </span>
              </Link>
            </li>
          </ul>
        </Card>
      </div>
      <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-9/12">
        <Card extraClassName="p-4">
          <div className="flex flex-wrap items-center justify-center -mx-3">
            <div className="w-4/12 max-w-full px-3 flex-0 sm:w-auto">
              <div className="w-19 h-19 text-base ease-soft-in-out relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                <Image
                  src={"/img/bruce-mars.jpg"}
                  alt=""
                  width={64}
                  height={64}
                  className="w-full shadow-soft-sm rounded-xl"
                />
              </div>
            </div>
            <div className="w-8/12 max-w-full px-3 my-auto flex-0 sm:w-auto">
              <div className="h-full">
                <h5 className="mb-1 font-bold dark:text-white">Michael Page</h5>
              </div>
            </div>
            <div className="flex max-w-full px-3 mt-4 sm:flex-0 shrink-0 sm:mt-0 sm:ml-auto sm:w-auto">
              <div className="inline-block mb-0 ml-1 mr-2 font-normal cursor-pointer text-sm text-slate-700 dark:text-white/80">
                <small>Switch to invisible</small>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 duration-250 ease-soft-in-out bg-slate-800/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-slate-800/95 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800/95"></div>
              </label>
            </div>
          </div>
        </Card>
        <Card extraClassName="mt-6">
          <div className="p-6 mb-0 rounded-t-2xl">
            <h5 className="dark:text-white">Basic Info</h5>
          </div>
          <div className="flex-auto p-6 pt-0">
            <div className="flex flex-wrap -mx-3">
              <div className="w-6/12 max-w-full px-3 flex-0">
                <label
                  htmlFor=""
                  className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  First Name
                </label>
                <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                  <input
                    type="text"
                    name=""
                    placeholder="Michael"
                    className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-6/12 max-w-full px-3 flex-0">
                <label
                  htmlFor=""
                  className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Last Name
                </label>
                <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                  <input
                    type="text"
                    name=""
                    placeholder="Page"
                    className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-6/12 max-w-full px-3 flex-0">
                <label
                  htmlFor=""
                  className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Email
                </label>
                <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                  <input
                    type="email"
                    name=""
                    placeholder="michael@test.com"
                    className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-6/12 max-w-full px-3 flex-0">
                <label
                  htmlFor=""
                  className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Mobile Number
                </label>
                <div className="relative flex flex-wrap items-stretch w-full rounded-lg">
                  <input
                    type="tel"
                    name=""
                    placeholder="+40 735 631 620"
                    className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card extraClassName="mt-6">
          <div className="p-6 mb-0 rounded-t-2xl">
            <h5 className="dark:text-white">Change Password</h5>
          </div>
          <div className="flex-auto p-6 pt-0">
            <label
              htmlFor=""
              className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
            >
              Current password
            </label>
            <div className="mb-4">
              <input
                type="password"
                name=""
                id=""
                placeholder="Current Password"
                className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
            </div>
            <label
              htmlFor=""
              className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
            >
              New password
            </label>
            <div className="mb-4">
              <input
                type="password"
                name=""
                id=""
                placeholder="New Password"
                className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
            </div>
            <label
              htmlFor=""
              className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
            >
              Confirm new password
            </label>
            <div className="mb-4">
              <input
                type="password"
                name=""
                id=""
                placeholder="Confirm new password"
                className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
            </div>
            <PasswordRequirementsComponent />
            <button className="inline-block float-right px-8 py-2 mt-16 mb-0 font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">
              Update Password
            </button>
          </div>
        </Card>
        <Card extraClassName="mt-6">
          <div className="flex p-6 rounded-t-2xl">
            <h5 className="mb-0 dark:text-white">Sites</h5>
          </div>
          <div className="flex-auto p-6">
            <div className="flex justify-between items-center overflow-x-auto">
              {/* <div className="flex justify-between items-center"> */}
              {/* <div className="flex overflow-x-auto"> */}
              <div className="flex">
                <Image
                  src={"/img/small-logos/logo-spotify.svg"}
                  className="w-12"
                  width={48}
                  height={48}
                  alt="site-logo"
                />
                <div className="my-auto ml-4">
                  <div className="h-full leading-normal whitespace-wrap">
                    <h5 className="mb-0 dark:text-white">Michael.com</h5>
                    <p className="mb-0 text-sm dark:text-white/60">
                      Basic Plan
                    </p>
                  </div>
                </div>
              </div>
              <button className="ml-auto mr-0 sm:mr-4 inline-block px-4 sm:px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">
                View
              </button>
            </div>
            <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            <div className="flex justify-between items-center overflow-x-auto">
              {/* <div className="flex justify-between items-center"> */}
              {/* <div className="flex overflow-x-auto"> */}
              <div className="flex">
                <Image
                  src={"/img/small-logos/logo-atlassian.svg"}
                  className="w-12"
                  width={48}
                  height={48}
                  alt="site-logo"
                />
                <div className="my-auto ml-4">
                  <div className="h-full leading-normal whitespace-wrap">
                    <h5 className="mb-0 dark:text-white">Kobe.com</h5>
                    <p className="mb-0 text-sm dark:text-white/60">
                      Standard Plan
                    </p>
                  </div>
                </div>
              </div>
              <button className="ml-auto mr-0 sm:mr-4 inline-block px-4 sm:px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">
                View
              </button>
            </div>
            <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            <div className="flex justify-between items-center overflow-x-auto">
              {/* <div className="flex justify-between items-center"> */}
              {/* <div className="flex overflow-x-auto"> */}
              <div className="flex">
                <Image
                  src={"/img/small-logos/logo-slack.svg"}
                  className="w-12"
                  width={48}
                  height={48}
                  alt="site-logo"
                />
                <div className="my-auto ml-4">
                  <div className="h-full leading-normal whitespace-wrap">
                    <h5 className="mb-0 dark:text-white">LeBron.com</h5>
                    <p className="mb-0 text-sm dark:text-white/60">
                      Custom Plan
                    </p>
                  </div>
                </div>
              </div>
              <button className="ml-auto mr-0 sm:mr-4 inline-block px-4 sm:px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-slate-700 text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75">
                View
              </button>
            </div>
          </div>
        </Card>
        <Card extraClassName="mt-6">
          <div className="p-6 rounded-t-2xl">
            <h5 className="dark:text-white">Delete Account</h5>
            <p className="mb-0 leading-normal text-sm dark:text-white/60">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>
          <div className="flex-auto p-6 pt-0 sm:flex sm:justify-between">
            <div className="flex items-center mb-6 sm:mb-0">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 duration-250 ease-soft-in-out bg-slate-800/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-slate-800/95 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800/95"></div>
              </label>
              <div className="ml-4">
                <span className="block font-semibold leading-normal text-sm text-slate-700 dark:text-white">
                  Confirm
                </span>
                <span className="block leading-tight text-xs">
                  I want to delete my account.
                </span>
              </div>
            </div>
            <button
              type="button"
              className="w-full sm:w-auto inline-block px-6 py-3 m-0 ml-2 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-red-600 to-rose-400 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
            >
              Delete Account
            </button>
            {/* <div className="flex justify-center">
              <button
                type="button"
                className="inline-block px-6 py-3 m-0 ml-2 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-red-600 to-rose-400 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
              >
                Delete Account
              </button>
            </div> */}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DetailUserPageTemplate
