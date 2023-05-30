import Link from "next/link"
import Image from "next/image"
import Table from "@/components/atoms/table/table"
import TableBody from "@/components/atoms/table/body/table-body"
import TableBodyItem from "@/components/atoms/table/body/table-body-item"
import { RouteConstant } from "@/lib/constants/route-constant"
import Card from "@/components/atoms/card/card"

interface AllSectionsPageTemplateProps {
  params: { page: string; section: string }
}

const AllSectionsPageTemplate: React.FC<AllSectionsPageTemplateProps> = ({
  params,
}) => {
  const { page } = params
  const currentPath: string =
    RouteConstant.PAGES + page + RouteConstant.SECTIONS + "/"

  return (
    <>
      <div className="flex flex-wrap mb-6 -mx-3">
        <Card width="mx-auto md:flex-0 shrink-0 md:w-9/12" padding="">
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
                  <Link
                    href={currentPath + "hero" + RouteConstant.EDIT}
                  >
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
                <TableBodyItem dividerLine={false}>
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
                <TableBodyItem dividerLine={false}>
                  <div className="mb-0 mr-6 text-center text-sm text-slate-400 dark:text-white/80">
                    <button type="button">Edit</button>
                  </div>
                </TableBodyItem>
              </tr>
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  )
}

export default AllSectionsPageTemplate
