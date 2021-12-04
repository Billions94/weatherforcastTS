import axios from "axios"
import { Dispatch } from "redux";
import { Data } from "../types";

export const GET_DATA = 'GET_DATA'
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const addToFavAction = (fav: Data | undefined) => ({
    type: ADD_TO_FAVORITE,
    payload: fav,
});
  
export const removeFromFavAction = (favId: number | undefined) => ({
    type: REMOVE_FROM_FAVORITE,
    payload: favId,
});

const apiKey = process.env.REACT_APP_API_KEY

export const getDataAction = (input: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`)

            console.log(data)
            dispatch({
                type: GET_DATA,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}