import Link from "next/link"
import Image from "next/image"
import Table from "@/components/atoms/table/table"
import TableBody from "@/components/atoms/table/body/table-body"
import TableBodyItem from "@/components/atoms/table/body/table-body-item"
import { RouteConstant } from "@/lib/constants/route-constant"
import Card from "@/components/atoms/card/card"
import Container from "@/components/atoms/container/container"
import { useEffect } from "react"

interface AllSectionsPageTemplateProps {
  params: { page: string; section: string }
}

const AllSectionsPageTemplate: React.FC<AllSectionsPageTemplateProps> = ({
  params,
}) => {
  const { page } = params
  const currentPath: string = RouteConstant.PAGES + page + "/"

  return (
    <>
      <div className="flex flex-wrap mb-6 -mx-3">
        <Container extraClassName="mx-auto md:flex-0 shrink-0 md:w-9/12">
          <Card>
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
                    <Link href={currentPath + "hero" + RouteConstant.EDIT}>
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
                          My Skills
                        </h6>
                      </div>
                    </div>
                  </TableBodyItem>
                  <TableBodyItem>
                  <Link href={currentPath  + "about" + RouteConstant.EDIT_ABOUT}>
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
                          src={"/img/team-1.jpg"}
                          width={500}
                          height={500}
                          alt="avatar image"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 leading-normal text-sm dark:text-white">
                          My Projects
                        </h6>
                      </div>
                    </div>
                  </TableBodyItem>
                  <TableBodyItem>
                  <Link href={currentPath  + "portfolio" + RouteConstant.EDIT_PORTFOLIO}>
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
                    <div className="mb-0 mr-6 text-center md:text-right text-sm text-slate-400 dark:text-white/80">
                      <button type="button">Edit</button>
                    </div>
                  </TableBodyItem>
                </tr>

              </TableBody>
            </Table>
          </Card>
        </Container>
      </div>
    </>
  )
}

export default AllSectionsPageTemplate
