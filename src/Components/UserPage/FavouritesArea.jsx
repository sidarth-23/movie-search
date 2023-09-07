import FavouriteCard from "./FavouritesCard"

export default function FavouritesArea(props) {
  const items = props.addFavourite

  return (
    <div className="h-full w-full bg-opacity-40 bg-black rounded-lg cont p-6  md:hover:bg-opacity-70 duration-100">
      <p className="text-2xl">My Favourites</p>
      {!items || items.length === 0 ? (
        <p className="text-6xl mt-10 md:text-8xl">No Favourites to Show !!</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {items.map((item) => (
            <FavouriteCard
              key={item[0]}
              data={item}
              deleteFavourite={props.deleteFavourite}
            />
          ))}
        </div>
      )}
    </div>
  )
}
