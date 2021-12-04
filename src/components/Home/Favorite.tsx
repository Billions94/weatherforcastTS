import { useSelector } from "react-redux";
import FavoriteList from "./FavoriteList";
import { ReduxState } from "../../redux/types";


const Favorite = () => {

    const { favorites }  = useSelector((state: ReduxState['addFavorite']) => state)
    console.log('i am the data ', favorites)

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
