import * as actions from "./actions";

const reducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case actions.FETCH_SUCCESS:
            return{
                ...state,
                isLoading: false,
                ninjas: action.payload,
            }
    }
    return state;
}

export default reducer