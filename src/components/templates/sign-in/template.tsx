import Link from "next/link"
import Image from "next/image"
import { RouteConstant } from "@/lib/constants/route-constant"

interface SignInTemplateProps {}

const SignInTemplate: React.FC<SignInTemplateProps> = () => {
  return (
    <>
      <div className="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py-4 dark:bg-gray-950 rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0">
            <h4 className="font-bold">Sign In</h4>
            <p className="mb-0">Enter your email and password to sign in</p>
          </div>
          <div className="flex-auto p-6">
            <form role="form" action="">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  name="email"
                  aria-label="Email"
                  autoFocus={true}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  name="password"
                  aria-label="Password"
                  required
                />
              </div>
              <div className="min-h-6 mb-0.5 block text-left">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 duration-250 ease-soft-in-out bg-slate-800/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-slate-800/95 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800/95"></div>
                  <span className="ml-3 text-sm font-normal cursor-pointer select-none text-slate-700">
                    Remember me
                  </span>
                </label>
              </div>
              <div className="text-center">
                {/* <button
                            type="submit"
                            className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                          >
                            Sign In
                          </button> */}
                <Link
                  href={RouteConstant.HOME}
                  className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
          <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
            <p className="mx-auto mb-4">
              Forgot your password? Reset your password&nbsp;
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-tl from-purple-700 to-pink-500">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
        <div className="relative flex flex-col justify-center h-full px-24 m-4 bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
          <Image
            className="absolute left-0 opacity-40"
            src={
              "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg"
            }
            width={1920}
            height={983}
            alt="pattern-lines"
          />
          <div className="relative flex justify-center">
            <Image
              className="relative w-full max-w-[31rem] z-2"
              src={
                "https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png"
              }
              width={500}
              height={376}
              alt="chat-img"
            />
          </div>
          <h4 className="mt-12 font-bold text-white">
            Attention is the new currency
          </h4>
          <p className="text-white">
            The more effortless the writing looks, the more effort the writer
            actually put into the process.
          </p>
        </div>
      </div>
    </>
  )
}

export default SignInTemplate
