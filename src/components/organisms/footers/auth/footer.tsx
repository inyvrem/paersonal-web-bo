import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="pt-4">
      <div className="w-full px-6 mx-auto">
        <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
          <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
            <div className="leading-normal text-center text-sm text-slate-500 lg:text-left">
              © 2024, Made with{" "}
              <FontAwesomeIcon icon={faHeart} className="w-3.5 -mt-0.5" /> by{" "}
              <strong>Mervyn</strong> for a better web.
            </div>
          </div>
          <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
            <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
              {/* <li>
                <a className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500">
                  Jam2
                </a>
              </li> */}
              <li>
                <a className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500">
                  About us
                </a>
              </li>
              <li>
                <a className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500">
                  Support
                </a>
              </li>
              <li>
                <a className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
