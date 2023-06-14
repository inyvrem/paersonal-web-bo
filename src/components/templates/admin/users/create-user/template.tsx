import Container from "@/components/atoms/container/container"

interface NewUserPageTemplateProps {}

const NewUserPageTemplate: React.FC<NewUserPageTemplateProps> = () => {
  return (
    <div className="flex flex-wrap -mx-3">
      <Container>
        <div className="mb-12">
          {/* <div className="flex flex-wrap -mx-3"></div> */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
              <form
                action=""
                method="post"
                className="relative mb-32"
                style={{ height: "402px" }}
              >
                <div className="absolute top-0 left-0 visible w-full h-auto p-4 opacity-100 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                  <h5 className="mb-0 font-bold dark:text-white">About me</h5>
                  <p className="mb-0 leading-normal text-sm">
                    Mandatory information
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NewUserPageTemplate
