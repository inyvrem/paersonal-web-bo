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
import axios from "axios"

interface EditSectionPageTemplateProps {
  params: { page: string; section: string }
}

const EditSectionPageTemplate: React.FC<EditSectionPageTemplateProps> = ({
  params,
}) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  )
  const [descriptionValue, setDescriptionValue] = useState("")
  const { page, section } = params
  const currentPath =
    RouteConstant.PAGES + page + "/" + section + RouteConstant.ELEMENTS

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [showSuccess, setShowSuccess] = useState(false);

    const updateData = async () => {
      axios.post('http://localhost:8082/back-office/secure/web-manage/web-hero/details/update', {
        webHeroId : '24f2b6f0-8574-4402-b6f8-28fac29b885a',
        title,
        description
      })
      .then((response) => {
        setShowSuccess(true);
        console.log("updated", response);
      }, (error) => {
        setShowSuccess(false);
        console.log(error);
      });
    }

    const closeSuccessMessage = () => {
      setShowSuccess(false); 
    };

    useEffect(() => {
      const fetchDataForPosts = async () => {
        axios.get('http://localhost:8082/back-office/admin/web-manage/web-hero/details/24f2b6f0-8574-4402-b6f8-28fac29b885a')
        .then((response) => {
          console.log("fetched", response);
          let data = response.data
          setTitle(data.title)
          setDescription(data.description)
        }, (error) => {
          console.log(error);
        });
      };

      fetchDataForPosts();
    }, []);

  return (
    <>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 lg:flex-0 lg:w-6/12">
          <h4 className="dark:text-white">Make the changes below</h4>
          <p>
            We&#39;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
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
              {/* <div className="flex flex-wrap -mx-3">
                <Container>
                  <label
                    htmlFor="sectionToggle"
                    className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                  >
                    Visibility
                  </label>
                  <label className="relative block items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 duration-250 ease-soft-in-out bg-slate-800/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-slate-800/95 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800/95"></div>
                  </label>
                </Container>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default EditSectionPageTemplate
