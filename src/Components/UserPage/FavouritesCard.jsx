export default function FavouriteCard (props) {
  const data = props.data;

  const clickhandler = () => {
    props.deleteFavourite(data[0])
  }

  return (
    <div
      onClick={clickhandler}
      className="w-48 h-72 bg-red-300 bg-opacity-50 rounded-md p-3 shadow-md flex flex-col justify-between m-2 duration-100 hover:scale-105"
    >
      <h2 className="text-gray-200">{data[1]}</h2>
      <img src={data[3]} alt={data[1]} className="h-48 w-fit" />
    </div>
  )
}
