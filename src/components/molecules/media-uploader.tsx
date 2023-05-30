import Image from "next/image"
import Dropzone from "react-dropzone"
import { useState } from "react"

interface MediaUploaderProps {}

const MediaUploader: React.FC<MediaUploaderProps> = () => {
  interface FilePreview {
    preview: string
  }

  const [files, setFiles] = useState<FilePreview[] | null>(null)

  function onDrop<T extends File>(acceptedFiles: T[]): void {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const thumbs = files?.map((file, index) => (
    <Image
      key={index}
      src={file.preview}
      alt={file.preview}
      width={100}
      height={100}
    />
  ))

  return (
    <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <form className="focus:shadow-soft-primary-outline dark:bg-gray-950 ease-soft block bg-white w-full appearance-none rounded-lg border border-solid border-gray-300 bg-clip-border outline-none transition-all focus:border-fuchsia-300 focus:outline-none cursor-pointer">
          <div {...getRootProps({ className: "p-10" })}>
            <input {...getInputProps()} />
            <p className="leading-5.6 text-center mt-5 dark:placeholder:text-white/80 dark:text-white/80 text-sm font-normal">
              Drop files here to upload
            </p>
          </div>
          {thumbs}
        </form>
      )}
    </Dropzone>
  )
}

export default MediaUploader
