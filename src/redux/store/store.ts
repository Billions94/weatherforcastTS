import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { encryptTransform } from "redux-persist-transform-encrypt";
import thunk from "redux-thunk";
import dataReducer from "../reducers/dataReducer";
import favoritesReducer from "../reducers/favoriteReducer";
import { ReduxState } from "../types/index"


const allCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

export const initialState: ReduxState = {
  data: null,
  addFavorite: {
      favorites: []
  }
};

const ghost: any = process.env.REACT_APP_SECRET_KEY;

const persisConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: ghost,
    }),
  ],
};

const allReducers = combineReducers({
    data: dataReducer,
    addFavorite: favoritesReducer
})

// const persistedReducer = persistReducer(persisConfig, allReducers)

const store = createStore(allReducers, initialState, allCompose(applyMiddleware(thunk)))

export default store

export const persistor = persistStore(store)

// base: "stations"
// clouds: {all: 90}
// cod: 200
// coord: {lon: -79.4163, lat: 43.7001}
// dt: 1638534113
// id: 6167865
// main: {temp: 273.43, feels_like: 273.43, temp_min: 271.41, temp_max: 275.61, pressure: 1016, humidity: 66}
// name: "Toronto"
// sys: {type: 1, id: 718, country: "CA", sunrise: 1638534842, sunset: 1638567692}
// timezone: -18000
// visibility: 10000
// weather: [{id: 804, main: "Clouds", description: "overcast clouds", icon: "04n"}]
// wind: {speed: 0.45, deg: 262, gust: 3.13}
