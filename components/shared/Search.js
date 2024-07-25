import Image from 'next/image'
import { Input } from '../ui/input'

const Search = ({setQuery, placeholder}) => {
  return (
    <div className="flex-center min-h-[54px] w-full md:w-[80%] lg:w-[50%] bg-white border-[3px] overflow-hidden rounded-full px-4 py-2">
      <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} />
      <Input 
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-transparent outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}

export default Search