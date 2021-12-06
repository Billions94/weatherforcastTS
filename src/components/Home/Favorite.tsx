import { useSelector } from "react-redux";
import FavoriteList from "./FavoriteList";
import { ReduxState } from "../../redux/types";


const Favorite = () => {

    const { addFavorite: {favorites} }  = useSelector((state: ReduxState) => state)
    console.log('i am the favorites ', favorites)

  return (
    <div className="containerMod">
        {
            favorites && favorites.map(data => (
               <FavoriteList data={data}/>
            ))
        }
    </div>
  );
};


export default Favorite
