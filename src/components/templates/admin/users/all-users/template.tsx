import Image from "next/image"
import TableBody from "@/components/atoms/table/body/table-body"
import TableBodyItem from "@/components/atoms/table/body/table-body-item"
import TableHead from "@/components/atoms/table/head/table-head"
import TableHeadItem from "@/components/atoms/table/head/table-head-item"
import Table from "@/components/atoms/table/table"
import Link from "next/link"
import { RouteConstant } from "@/lib/constants/route-constant"

interface AllUsersPageTemplateProps {}

const AllUsersPageTemplate: React.FC<AllUsersPageTemplateProps> = () => {
  return (
    <div className="w-full max-w-full px-3 flex-0">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadItem title="id" />
              <TableHeadItem title="user" className="pl-2" />
              <TableHeadItem title="status" className="pl-2" />
              <TableHeadItem title="email" className="text-center" />
              <TableHeadItem title="created on" className="text-center" />
              <TableHeadItem title="sites" className="text-center" />
              <TableHeadItem title="action" className="text-center" />
            </TableHead>
            <TableBody>
              <tr>
                <TableBodyItem className="py-4">
                  <div className="flex items-center">
                    <p className="mb-0 ml-2 font-semibold leading-tight text-xs">
                      #10421
                    </p>
                  </div>
                </TableBodyItem>
                <TableBodyItem className="font-semibold leading-tight text-xs">
                  <div className="flex items-center">
                    <Image
                      className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 text-sm ease-soft-in-out h-6 w-6 rounded-xl"
                      src={"/img/team-1.jpg"}
                      width={24}
                      height={24}
                      alt="avatar image"
                    />
                    <span className="dark:text-white">Orlando Imieto</span>
                  </div>
                </TableBodyItem>
                <TableBodyItem>
                  <span className="py-2.2 rounded-1.8 text-sm mr-6 inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none">
                    <i className="rounded-circle mr-1.5 inline-block h-1.5 w-1.5 bg-green-500 align-middle" />
                    <span className="leading-tight text-xs text-slate-700 dark:text-white">
                      active
                    </span>
                  </span>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <p className="mb-0 dark:text-white/80">john@user.com</p>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <span className="dark:text-white">23/04/18</span>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <span className="dark:text-white">1</span>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <Link
                    href={RouteConstant.ALL_USERS + "/" + "10421"}
                  >
                    <button
                      type="button"
                      className="py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white theme-color"
                    >
                      View
                    </button>
                  </Link>
                </TableBodyItem>
              </tr>

              <tr>
                <TableBodyItem className="py-4">
                  <div className="flex items-center">
                    <p className="mb-0 ml-2 font-semibold leading-tight text-xs">
                      #10422
                    </p>
                  </div>
                </TableBodyItem>
                <TableBodyItem className="font-semibold leading-tight text-xs">
                  <div className="flex items-center">
                    <Image
                      className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 text-sm ease-soft-in-out h-6 w-6 rounded-xl"
                      src={"/img/team-2.jpg"}
                      width={24}
                      height={24}
                      alt="avatar image"
                    />
                    <span className="dark:text-white">Moscow Liam</span>
                  </div>
                </TableBodyItem>
                <TableBodyItem>
                  <span className="py-2.2 rounded-1.8 text-sm mr-6 inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none">
                    <i className="rounded-circle mr-1.5 inline-block h-1.5 w-1.5 bg-green-500 align-middle" />
                    <span className="leading-tight text-xs text-slate-700 dark:text-white">
                      active
                    </span>
                  </span>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <p className="mb-0 dark:text-white/80">liam@user.com</p>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <span className="dark:text-white">30/11/20</span>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <span className="dark:text-white">3</span>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <Link
                    href={RouteConstant.ALL_USERS + "/" + "10422"}
                  >
                    <button
                      type="button"
                      className="py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white theme-color"
                    >
                      View
                    </button>
                  </Link>
                </TableBodyItem>
              </tr>

              <tr>
                <TableBodyItem className="py-4" dividerLine={false}>
                  <div className="flex items-center">
                    <p className="mb-0 ml-2 font-semibold leading-tight text-xs">
                      #10423
                    </p>
                  </div>
                </TableBodyItem>
                <TableBodyItem
                  className="font-semibold leading-tight text-xs"
                  dividerLine={false}
                >
                  <div className="flex items-center">
                    <Image
                      className="inline-flex items-center justify-center mr-2 text-white transition-all duration-200 text-sm ease-soft-in-out h-6 w-6 rounded-xl"
                      src={"/img/team-3.jpg"}
                      width={24}
                      height={24}
                      alt="avatar image"
                    />
                    <span className="dark:text-white">Mark Brown</span>
                  </div>
                </TableBodyItem>
                <TableBodyItem dividerLine={false}>
                  <span className="py-2.2 rounded-1.8 text-sm mr-6 inline-block whitespace-nowrap bg-transparent px-0 text-center align-baseline font-normal leading-none">
                    <i className="rounded-circle mr-1.5 inline-block h-1.5 w-1.5 bg-red-500 align-middle" />
                    <span className="leading-tight text-xs text-slate-700 dark:text-white">
                      inactive
                    </span>
                  </span>
                </TableBodyItem>
                <TableBodyItem
                  className="leading-normal text-sm text-center"
                  dividerLine={false}
                >
                  <p className="mb-0 dark:text-white/80">mark@user.com</p>
                </TableBodyItem>
                <TableBodyItem
                  className="leading-normal text-sm text-center"
                  dividerLine={false}
                >
                  <span className="dark:text-white">02/08/19</span>
                </TableBodyItem>
                <TableBodyItem
                  className="leading-normal text-sm text-center"
                  dividerLine={false}
                >
                  <span className="dark:text-white">2</span>
                </TableBodyItem>
                <TableBodyItem className="leading-normal text-sm text-center">
                  <Link
                    href={RouteConstant.ALL_USERS + "/" + "10423"}
                  >
                    <button
                      type="button"
                      className="py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white theme-color"
                    >
                      View
                    </button>
                  </Link>
                </TableBodyItem>
              </tr>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default AllUsersPageTemplate
