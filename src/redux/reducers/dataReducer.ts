import { initialState } from "../store/store";
import { GET_DATA } from "../actions";
import { AnyAction } from "redux";

const dataReducer = (state = initialState.data, action: AnyAction) => {
    const { type, payload } = action
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                 data: payload
            }
        default: return state
    }
}

export default dataReducer