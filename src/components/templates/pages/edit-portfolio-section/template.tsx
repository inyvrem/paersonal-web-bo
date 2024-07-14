"use client"

import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useEffect, useMemo, useState } from "react"
import "react-quill/dist/quill.snow.css"
import Table from "@/components/atoms/table/table"
import TableBody from "@/components/atoms/table/body/table-body"
import TableBodyItem from "@/components/atoms/table/body/table-body-item"
import Card from "@/components/atoms/card/card"
import { RouteConstant } from "@/lib/constants/route-constant"
import Container from "@/components/atoms/container/container"
import Popout from "@/components/atoms/popup/popout"
import axios from "axios"

interface EditPortfolioSectionPageTemplateProps {
  params: { page: string; section: string }
}

const EditPortfolioSectionPageTemplate: React.FC<EditPortfolioSectionPageTemplateProps> = ({
  params,
}) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  )
  const { page, section } = params
  const currentPath =
    RouteConstant.PAGES + page + "/" + section + RouteConstant.ELEMENTS

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [subPortfolioContents, setSubPortfolioContents] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


    const updateData = async () => {
      axios.post('http://localhost:8082/back-office/secure/web-manage/web-portfolio/details/update', {
        webPortfolioId : '09e33cad-13d4-483d-ab9e-f76032704ec7',
        title,
        description
      })
      .then((response) => {
        setShowSuccess(true);
        console.log("updated", response);
      }, (error) => {
        console.log(error);
      });
    }

    const handleSave = async (title, description) => {
        try {
          const response = await axios.post('http://localhost:8082/back-office/secure/web-manage/web-portfolio/sub-portfolio/create', {
            webPortfolioId : '09e33cad-13d4-483d-ab9e-f76032704ec7',
            title,
            description,
          });
          setSubPortfolioContents([...subPortfolioContents, response.data]);
          setIsModalOpen(false);
          window.location.reload(); 
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };


    useEffect(() => {
      const fetchDataForPosts = async () => {
        axios.get('http://localhost:8082/back-office/admin/web-manage/web-portfolio/details/09e33cad-13d4-483d-ab9e-f76032704ec7')
        .then((response) => {
          console.log("fetched", response);
          let data = response.data
          setTitle(data.title)
          setDescription(data.description)
          setSubPortfolioContents(data.subPortfolioContents)
        }, (error) => {
          console.log(error);
        });
      };

      fetchDataForPosts();
    }, []);

    const handleAddClick = () => {
        setIsModalOpen(true);
      };
    
    const handleCloseModal = () => {
    setIsModalOpen(false);
    };
    
    const closeSuccessMessage = () => {
      setShowSuccess(false); 
    };

  return (
    <>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 lg:flex-0 lg:w-6/12">
          <h4 className="dark:text-white">Make the changes below</h4>
          <p>
            You can edit your project from this page
          </p>
        </div>
        <div className="flex flex-col justify-center w-full max-w-full px-3 text-right shrink-0 lg:flex-0 lg:w-6/12">
          <button
            onClick={updateData}
            type="submit"
            className="inline-block px-6 py-3 mt-2 mb-0 mr-auto font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:ml-auto lg:mr-0 lg:mt-0 hover:scale-102 active:opacity-85 hover:shadow-soft-xs theme-color leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
          >
            Save
          </button>
          {showSuccess && (
          <div className="mt-4 px-4 py-2 bg-green-100 text-green-800 border border-green-400 rounded">
            Success! Data has been saved.
              <button
                onClick={closeSuccessMessage}
                className="ml-4 px-2 py-1 bg-green-200 text-green-800 border border-green-400 rounded"
                >
                x
              </button>
          </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap mt-6 -mx-3">
        {/* <div className="w-full max-w-full px-3 shrink-0 lg:flex-0 lg:w-4/12">
          <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-6">
              <h5 className="font-bold dark:text-white">Section Image</h5>
              <div className="flex flex-wrap -mx-3">
                <Container>
                  <Image
                    src={"/img/team-1.jpg"}
                    width={427}
                    height={284}
                    style={{ width: "427px", height: "284px" }}
                    className="w-full h-[17.5rem] mt-4 rounded-xl shadow-soft-3xl"
                    alt="section_image"
                  />
                </Container>
                <div className="w-full max-w-full px-3 mt-6 flex-0">
                  <div className="flex">
                    <button
                      type="button"
                      className="inline-block px-8 py-2 mr-2 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft theme-color shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="inline-block px-8 py-2 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-slate-700 dark:border-white dark:text-white dark:hover:text-white dark:active:border-white dark:hover:active:border-white dark:active:hover:text-white text-slate-700 hover:text-slate-700 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-700 active:bg-slate-700 active:text-white hover:active:border-slate-700 hover:active:text-slate-700 hover:active:opacity-75"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-full max-w-full px-3 mt-6 shrink-0 lg:flex-0 lg:w-8/12 lg:mt-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-6">
              <h5 className="font-bold dark:text-white">Section Information</h5>
              <div className="flex flex-wrap -mx-3">
                <Container>
                  <label
                    htmlFor="sectionName"
                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                  >
                    Name
                  </label>
                  <input
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                    type="text"
                    name="sectionName"
                    value={title}
                    className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  />
                </Container>
              </div>
              <div className="flex flex-wrap -mx-3">
                <Container>
                  <label
                    htmlFor="sectionDescription"
                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                  >
                    Description
                  </label>
                  <textarea
                  name="sectionDescription"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value)
                  }}
                  className="block focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  />
          
                </Container>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 -mx-3">
        <Card>
        <div className="flex items-center justify-between px-6 pt-6">
          <h5 className="px-6 pt-6 font-bold dark:text-white">Sublist</h5>
            <button
            type="button"
            className="inline-block px-8 py-2 mr-2 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft theme-color shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
            onClick={handleAddClick}
             >
                Add
            </button>
        </div>
          <Table>
            <TableBody>
            {subPortfolioContents.map((item)=> 
              <tr key ={item.subAboutId} >
                <TableBodyItem className="w-full">
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
                      {item.title}
                      </h6>
                    </div>
                  </div>
                </TableBodyItem>
                <TableBodyItem className="w-full">
                  <Link href={`${currentPath}service-1${RouteConstant.EDIT}`}>
                    <div className="mb-0 mr-6 text-center md:text-right text-sm text-slate-400 dark:text-white/80">
                      <button type="button">Edit</button>
                    </div>
                  </Link>
                </TableBodyItem>
              </tr>
            )}
            </TableBody>
          </Table>
          <Popout isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSave} />
        </Card>
      </div>
    </>
  )
}

export default EditPortfolioSectionPageTemplate
