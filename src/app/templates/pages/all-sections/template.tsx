"use client"

import Link from "next/link"
import Image from "next/image"
import Table from "@/app/atoms/tables/table"
import TableHead from "@/app/atoms/tables/head/table-head"
import TableHeadItem from "@/app/atoms/tables/head/table-head-item"
import TableBody from "@/app/atoms/tables/body/table-body"
import TableBodyItem from "@/app/atoms/tables/body/table-body-item"
import HeadlineTitleText from "@/app/atoms/text/headline-title-text"
import { Route } from "@/utils/constants/route"

interface AllSectionsPageTemplateProps {
  params: { page: string; section: string }
}

const AllSectionsPageTemplate: React.FC<AllSectionsPageTemplateProps> = ({ params }) => {
  const { page } = params
  const currentPath: string = Route.PAGES + page + Route.SECTIONS + "/"

  return (
    <>
      <div className="flex flex-wrap mb-6 -mx-3">
        {/* <div className="w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-9/12"> */}
        {/* <div className="w-full max-w-full px-3 flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="overflow-x-auto">
              <div className="items-center w-full mb-0">
                <h6 className="px-6 py-3 text-lg font-bold bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap opacity-70 text-black dark:border-white/40 dark:text-white dark:opacity-80">
                  Sections
                </h6>
              </div>
              <Table>
                <TableHead>
                  <TableHeadItem title="section" />
                  <TableHeadItem title="function" className="pl-2" />
                  <TableHeadItem title="review" className="pl-2" />
                  <TableHeadItem title="email" className="text-center" />
                  <TableHeadItem title="employed" className="text-center" />
                  <TableHeadItem title="id" className="text-center" />
                </TableHead>
                <TableBody>
                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-1.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            Hero
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <p className="mb-0 leading-normal text-sm text-slate-400 dark:text-white/80">
                        Manager
                      </p>
                    </TableBodyItem>
                    <TableBodyItem>
                      <span className="py-2.2 rounded-1.8 text-sm mr-6 inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                        <i className="rounded-circle mr-1.5 inline-block h-1.5 w-1.5 bg-cyan-500 align-middle" />
                        <span className="leading-tight text-xs text-slate-700 dark:text-white">
                          positive
                        </span>
                      </span>
                    </TableBodyItem>
                    <TableBodyItem className="leading-normal text-center text-sm">
                      <p className="mb-0 leading-normal text-sm text-slate-400 dark:text-white/80">
                        john@user.com
                      </p>
                    </TableBodyItem>
                    <TableBodyItem className="text-center">
                      <span className="leading-normal text-sm text-slate-400 dark:text-white/80">
                        23/04/18
                      </span>
                    </TableBodyItem>
                    <TableBodyItem className="text-center">
                      <span className="leading-normal text-sm text-slate-400 dark:text-white/80">
                        43431
                      </span>
                    </TableBodyItem>
                  </tr>
                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-2.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            Alexa Liras
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <p className="mb-0 leading-normal text-sm text-slate-400 dark:text-white/80">
                        Programmer
                      </p>
                    </TableBodyItem>
                    <TableBodyItem>
                      <span className="py-2.2 rounded-1.8 text-sm mr-6 inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                        <i className="rounded-circle mr-1.5 inline-block h-1.5 w-1.5 bg-slate-700 align-middle" />
                        <span className="leading-tight text-xs text-slate-700 dark:text-white">
                          neutral
                        </span>
                      </span>
                    </TableBodyItem>
                    <TableBodyItem className="leading-normal text-center text-sm">
                      <p className="mb-0 leading-normal text-sm text-slate-400 dark:text-white/80">
                        alexa@user.com
                      </p>
                    </TableBodyItem>
                    <TableBodyItem className="text-center">
                      <span className="leading-normal text-sm text-slate-400 dark:text-white/80">
                        23/04/18
                      </span>
                    </TableBodyItem>
                    <TableBodyItem className="text-center">
                      <span className="leading-normal text-sm text-slate-400 dark:text-white/80">
                        43431
                      </span>
                    </TableBodyItem>
                  </tr>
                  <tr>
                    <TableBodyItem isLastItem={true}>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-3.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            Laurent Perrier
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem isLastItem={true}>
                      <p className="mb-0 leading-normal text-sm text-slate-400 dark:text-white/80">
                        Executive
                      </p>
                    </TableBodyItem>
                    <TableBodyItem isLastItem={true}>
                      <span className="py-2.2 rounded-1.8 text-sm mr-6 inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none text-white">
                        <i className="rounded-circle mr-1.5 inline-block h-1.5 w-1.5 bg-red-600 align-middle" />
                        <span className="leading-tight text-xs text-slate-700 dark:text-white">
                          negative
                        </span>
                      </span>
                    </TableBodyItem>
                    <TableBodyItem
                      className="leading-normal text-center text-sm"
                      isLastItem={true}
                    >
                      <p className="mb-0 leading-normal text-sm text-slate-400 dark:text-white/80">
                        laurent@user.com
                      </p>
                    </TableBodyItem>
                    <TableBodyItem className="text-center">
                      <span className="leading-normal text-sm text-slate-400 dark:text-white/80">
                        23/04/18
                      </span>
                    </TableBodyItem>
                    <TableBodyItem className="text-center" isLastItem={true}>
                      <span className="leading-normal text-sm text-slate-400 dark:text-white/80">
                        43431
                      </span>
                    </TableBodyItem>
                  </tr>
                </TableBody>
              </Table>
            </div>
          </div>
        </div> */}
        <div className="w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-8/12">
          {/* <div className="w-full max-w-full px-3 flex-0"> */}
          <div className="relative flex flex-col break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="overflow-x-auto">
              <div className="items-center w-full mb-0">
                <h6 className="px-6 py-3 text-lg font-bold bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap opacity-70 text-black dark:border-white/40 dark:text-white dark:opacity-80">
                  Sections
                </h6>
              </div>
              <Table>
                <TableBody>
                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-1.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            Hero
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <Link href={currentPath + "hero"}>
                        <div className="mb-0 mr-6 text-center md:text-right text-sm text-slate-400 dark:text-white/80">
                          <button type="button">Edit</button>
                        </div>
                      </Link>
                    </TableBodyItem>
                  </tr>
                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-2.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            About me
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <div className="mb-0 mr-6 text-center md:text-right text-sm text-slate-400 dark:text-white/80">
                        <button type="button">Edit</button>
                      </div>
                    </TableBodyItem>
                  </tr>
                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-3.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            My Services
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <Link href={"/"}>
                        <div className="mb-0 mr-6 text-center md:text-right text-sm text-slate-400 dark:text-white/80">
                          Edit
                        </div>
                      </Link>
                    </TableBodyItem>
                  </tr>

                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-1.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            My Experiences
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <div className="mb-0 mr-6 text-center text-sm text-slate-400 dark:text-white/80">
                        <button type="button">Edit</button>
                      </div>
                    </TableBodyItem>
                  </tr>
                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-2.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            My Recent Projects
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <div className="mb-0 mr-6 text-center text-sm text-slate-400 dark:text-white/80">
                        <button type="button">Edit</button>
                      </div>
                    </TableBodyItem>
                  </tr>
                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-3.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            What&#39;s Our Client Saying
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <div className="mb-0 mr-6 text-center text-sm text-slate-400 dark:text-white/80">
                        <button type="button">Edit</button>
                      </div>
                    </TableBodyItem>
                  </tr>

                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-1.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            Team members
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <div className="mb-0 mr-6 text-center text-sm text-slate-400 dark:text-white/80">
                        <button type="button">Edit</button>
                      </div>
                    </TableBodyItem>
                  </tr>
                  <tr>
                    <TableBodyItem>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-2.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            Contact me
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem>
                      <div className="mb-0 mr-6 text-center text-sm text-slate-400 dark:text-white/80">
                        <button type="button">Edit</button>
                      </div>
                    </TableBodyItem>
                  </tr>
                  <tr>
                    <TableBodyItem isLastItem={true}>
                      <div className="flex px-2 py-1">
                        <div>
                          <Image
                            className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 text-sm ease-soft-in-out h-9 w-9 rounded-xl"
                            src={"/img/team-3.jpg"}
                            width={500}
                            height={500}
                            alt="avatar image"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 leading-normal text-sm dark:text-white">
                            Laurent PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent PerrierLaurent
                            PerrierLaurent PerrierLaurent Perrier
                          </h6>
                        </div>
                      </div>
                    </TableBodyItem>
                    <TableBodyItem isLastItem={true}>
                      <div className="mb-0 mr-6 text-center text-sm text-slate-400 dark:text-white/80">
                        <button type="button">Edit</button>
                      </div>
                    </TableBodyItem>
                  </tr>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllSectionsPageTemplate
