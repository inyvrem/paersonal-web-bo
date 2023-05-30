import Card from "@/components/atoms/card/card"
import MediaUploader from "@/components/molecules/media-uploader"

interface NewSectionPageTemplateProps {}

const NewSectionPageTemplate: React.FC<NewSectionPageTemplateProps> = () => {
  return (
    <Card padding="p-4 mt-6">
      <h6 className="mb-0 dark:text-white">New Section</h6>
      <p className="mb-0 leading-normal text-sm">Create new section</p>
      <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <label
        htmlFor="sectionName"
        className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
      >
        Section Name
      </label>
      <input
        type="text"
        name="sectionName"
        placeholder=""
        className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
      />
      <label
        htmlFor="sectionDescription"
        className="inline-block mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
      >
        Section Description
      </label>
      <input
        type="text"
        name="sectionDescription"
        placeholder=""
        className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
      />
      <label
        htmlFor="sectionImage"
        className="inline-block mt-6 mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
      >
        Section Image
      </label>
      <MediaUploader />
    </Card>
  )
}

export default NewSectionPageTemplate
