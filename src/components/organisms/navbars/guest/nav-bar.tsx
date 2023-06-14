import Container from "@/components/atoms/container/container"

interface GuestNavbarProps {}

const GuestNavbar: React.FC<GuestNavbarProps> = () => {
  return (
    <div className="container sticky top-0 z-110">
      <div className="flex flex-wrap -mx-3">
        <Container>
          <nav className="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mx-6 my-4 shadow-soft-2xl bg-white/80 backdrop-blur-2xl backdrop-saturate-200 rounded-blur lg:flex-nowrap lg:justify-start">
            <div className="container flex flex-wrap items-center justify-between lg-max:overflow-hidden lg:flex-nowrap">
              <a className="py-2.5 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0">
                Admin Dashboard
              </a>
              <button
                type="button"
                className="px-3 py-1 ml-2 leading-none bg-transparent rounded-lg shadow-none cursor-pointer lg:hidden text-lg text-slate-700"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6-em h-6-em bg-none">
                  <span className="w-5.5 rounded-xs relative my-0 mx-auto block h-px transition-all duration-300 bg-gray-600 "></span>
                  <span className="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px transition-all duration-300 bg-gray-600 "></span>
                  <span className="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px transition-all duration-300 bg-gray-600 "></span>
                </span>
              </button>
              <div className="items-center w-full pt-4 pb-2 transition-all duration-350 ease-soft-in-out lg-max:max-h-0 lg-max:overflow-hidden lg-max:hidden lg-max:bg-transparent lg-max:shadow-none md-max:relative grow basis-full rounded-2xl lg:flex lg:basis-auto lg:py-0">
                <ul className="flex flex-col pl-0 mx-auto mb-0 md-max:w-full lg:flex-row">
                  <li>
                    <a className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-size-sm lg:px-2 text-slate-700">
                      <i
                        className="mr-1 fas fa-user-circle opacity-60"
                        aria-hidden="true"
                      ></i>
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-size-sm lg:px-2 text-slate-700">
                      <i
                        className="mr-1 fas fa-key opacity-60"
                        aria-hidden="true"
                      ></i>
                      Sign In
                    </a>
                  </li>
                </ul>
                <ul className="hidden pl-0 mb-0 lg:block lg:flex-row">
                  <li>
                    <a className="inline-block px-8 py-2 mb-0 mr-1 font-bold text-center text-white uppercase align-middle transition-all border-0 cursor-pointer ease-soft-in-out text-xs leading-pro bg-gradient-to-tl from-purple-700 to-pink-500 tracking-tight-soft shadow-soft-md bg-150 bg-x-25 rounded-7 hover:scale-102 active:opacity-85">
                      Free Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  )
}

export default GuestNavbar
