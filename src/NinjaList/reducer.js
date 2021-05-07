import * as actions from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case actions.FETCH_ALL_NINJAS:
            return{
                ...state,
                isLoading: false,
                ninjas: action.payload,
            }

        case actions.FETCH_SINGLE_NINJA:
            return{
                ...state, 
                singleNinja: action.payload,
            }
            default:
                return state
    }
    
    
}

export default reducer