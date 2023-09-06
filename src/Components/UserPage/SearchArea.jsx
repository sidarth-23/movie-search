import { useState} from "react";
import SearchResults from "./SearchResults";

export default function SearchArea(props) {
  const [value, setValue] = useState('');

  const formHandler = (event) => {
    event.preventDefault();
    props.searchQuery(value);
    setValue("");
  }

  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="h-full w-full bg-opacity-40 bg-black rounded-lg cont p-6   duration-100 flex flex-col">
      <div className="flex flex-col mb-3">
        <form onSubmit={formHandler} action="submit" className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="search"> Search</label>
            <input
              name="search"
              type="text"
              value={value}
              onChange={handleInputChange}
              className="bg-white text-black opacity-100 border-2 rounded-lg p-2 mt-1 duration-100 hover:scale-110 focus:scale-110 shadow-md border-slate-500"
            />
          </div>
          <div className="flex justify-center content-center flex-wrap">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-10 border-2 border-green-400 mb-1 rounded-md duration-500 hover:translate-y-1"
            >
              <p className="px-4">Get Movies</p>
            </button>
          </div>
        </form>
      </div>
      <SearchResults
        searchCardClick={props.searchCardClick}
        data={props.data}
      />
    </div>
  )
}
