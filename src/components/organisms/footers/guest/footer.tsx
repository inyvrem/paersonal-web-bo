import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDribbble,
  faTwitter,
  faInstagram,
  faPinterest,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
interface GuestFooterProps {}

const GuestFooter: React.FC<GuestFooterProps> = () => {
  return (
    <footer className="py-12">
      <div className="container">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mx-auto mb-6 text-center shrink-0 lg:flex-0 lg:w-8/12">
            <a className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
              Lorem Ipsum
            </a>
            <a className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
              Lorem Ipsum
            </a>
            <a className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
              Lorem Ipsum
            </a>
            <a className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
              Lorem Ipsum
            </a>
            <a className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
              Lorem Ipsum
            </a>
            <a className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
              Lorem Ipsum
            </a>
          </div>
          <div className="w-full max-w-full px-3 mx-auto mt-2 mb-6 text-sm text-center shrink-0 lg:flex-0 lg:w-8/12">
            <a className="mr-6 text-slate-400">
              <span>
                <FontAwesomeIcon icon={faDribbble} className="w-4.5" />
              </span>
            </a>
            <a className="mr-6 text-slate-400">
              <FontAwesomeIcon icon={faTwitter} className="w-4.5" />
            </a>
            <a className="mr-6 text-slate-400">
              <FontAwesomeIcon icon={faInstagram} className="w-4.5" />
            </a>
            <a className="mr-6 text-slate-400">
              <FontAwesomeIcon icon={faPinterest} className="w-4.5" />
            </a>
            <a className="mr-6 text-slate-400">
              <FontAwesomeIcon icon={faGithub} className="w-4.5" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
            <p className="mb-0 text-slate-400">Copyright © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default GuestFooter
