import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconConstant } from "@/lib/constants/icon-constant"

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="flex items-center md:ml-auto md:pr-4">
      <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
        <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
          <FontAwesomeIcon icon={IconConstant.SEARCH} className="w-3.5" />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
        />
      </div>
    </div>
  )
}

export default SearchBar
