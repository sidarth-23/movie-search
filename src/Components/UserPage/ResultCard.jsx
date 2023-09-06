export default function ResultCard(props) {
  const data = props.data;

  const clickhandler = () => {
    props.searchCardClick(data);
  }
  
  return (
    <div onClick={clickhandler} className="w-48 h-72 bg-red-300 bg-opacity-50 rounded-md p-3 shadow-md flex flex-col justify-between m-2 duration-100 hover:scale-105">
      <h2 className="text-gray-200">{data.Title}</h2>
      <img src={data.Poster} alt={data.title} className="h-48 w-fit" />
    </div>
  )
}