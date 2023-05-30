"use client"

import Image from "next/image"
import dynamic from "next/dynamic"
import { useMemo, useState } from "react"
import "react-quill/dist/quill.snow.css"

interface EditSectionElementPageTemplateProps {}

const EditSectionElementPageTemplate: React.FC<
  EditSectionElementPageTemplateProps
> = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  )
  const [descriptionValue, setDescriptionValue] = useState("")

  return (
    <>
      <form action="">
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
              type="submit"
              className="inline-block px-6 py-3 mt-2 mb-0 mr-auto font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:ml-auto lg:mr-0 lg:mt-0 hover:scale-102 active:opacity-85 hover:shadow-soft-xs theme-color leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 -mx-3">
          <div className="w-full max-w-full px-3 shrink-0 lg:flex-0 lg:w-4/12">
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-6">
                <h5 className="font-bold dark:text-white">Element Image</h5>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 flex-0">
                    <Image
                      src={"/img/team-1.jpg"}
                      width={500}
                      height={300}
                      style={{ width: "427px", height: "284px" }}
                      className="w-full h-[17.5rem] mt-4 rounded-xl shadow-soft-3xl"
                      alt="section_element_image"
                    />
                  </div>
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
          </div>
          <div className="w-full max-w-full px-3 mt-6 shrink-0 lg:flex-0 lg:w-8/12 lg:mt-0">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-6">
                <h5 className="font-bold dark:text-white">
                  Element Information
                </h5>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 flex-0">
                    <label
                      htmlFor="sectionElementName"
                      className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="sectionName"
                      value={"Hero"}
                      readOnly
                      className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 flex-0">
                    <label
                      htmlFor="sectionElementDescription"
                      className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                    >
                      Description
                    </label>
                    <ReactQuill
                      theme="snow"
                      className="ql-custom-styling"
                      value={descriptionValue}
                      onChange={setDescriptionValue}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 flex-0">
                    <label
                      htmlFor="sectionElementToggle"
                      className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                    >
                      Visibility
                    </label>
                    <label className="relative block items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 duration-250 ease-soft-in-out bg-slate-800/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-slate-800/95 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800/95"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditSectionElementPageTemplate
