import { initialState } from "../store/store";
import { GET_DATA } from "../actions";
import { AnyAction } from "redux";

const dataReducer = (state = initialState.data, action: AnyAction) => {
    const { type, payload } = action
    console.log("in reducer", state, payload)
    switch (type) {
        case GET_DATA:
            return payload
        default: return state
    }
}

export default dataReducer