const initialState = {
    isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_AUTH":
            return { ...state, isLoggedIn: !state.isLoggedIn }
        default:
            return state
    }
}