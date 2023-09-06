
import SearchArea from "./SearchArea";
import WelcomeHeader from "./WelcomeHeader";
import FavouritesArea from "./FavouritesArea";

export default function LoggedInPage(props) {
  return (
    <div className="flex flex-col top-0 h-full justify-between">
      <WelcomeHeader name={props.item} onLogout={props.onLogout} />
      <div className="w-screen h-full p-6 overflow-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
        <SearchArea searchCardClick={props.searchCardClick} data={props.data} searchQuery={ props.searchQuery} />
        <FavouritesArea addFavourite={props.addFavourite} deleteFavourite={props.deleteFavourite} />
      </div>
    </div>
  )
}