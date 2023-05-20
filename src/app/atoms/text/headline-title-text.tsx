interface HeadlineTitleTextProps {
  title: string
}

const HeadlineTitleText: React.FC<HeadlineTitleTextProps> = ({ title }) => {
  return (
    <div className="flex flex-wrap -mx-3">
      <div className="relative z-20 w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-7/12">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-transparent border-0 border-solid shadow-none border-black-125 rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap -ml-3">
              <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 lg:w-6/12">
                <div className="flex flex-col h-full">
                  <h2 className="mb-0 font-bold dark:text-white">{title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadlineTitleText
