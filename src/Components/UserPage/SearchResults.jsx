import ResultCard from "./ResultCard"

export default function SearchResults(props) {
  const data = props.data;
  return (
    <div className="flex flex-wrap justify-center">
      {data.map(item => <ResultCard key={item.imdbID} data={item} searchCardClick={props.searchCardClick} />)}
    </div>
  )
}