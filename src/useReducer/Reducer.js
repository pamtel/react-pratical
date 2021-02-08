    export const ADD_SINGLE_ITEM = "ADD_SINGLE_ITEM"
    export const CLOSE_MODAL = "CLOSE_MODAL"
    export const HANDLE_DELETE = "HANDLE_DELETE"
    export const CLEAR_ITEMS = "CLEAR_ITEMS"
    export const ENTER_VALUE = "ENTER_VALUE"

const Reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_SINGLE_ITEM:
            const newItem = {id: new Date().getTime().toString(), singleItem:action.payload}
            return{
                ...state,
                AllItems: [...state.AllItems, newItem],
                showModal: true,
                modalText: `${action.payload} Added To List`,
                modalColor: "bg-green-300"
            }
            case CLOSE_MODAL:
                return {
                    ...state,
                    showModal: false
                }
            case HANDLE_DELETE:
                const deleteItem = state.AllItems.filter((singleItem) => singleItem.id !== action.payload)
                return {
                    ...state,
                    showModal: true,
                    modalText: `${action.payloadTwo} Removed`,
                    AllItems: deleteItem,
                    modalColor: "bg-red-300",
                }
            case CLEAR_ITEMS: 
                return {
                    ...state,
                    AllItems: [],
                    showModal: true,
                    modalText: "Empty List",
                    modalColor: "bg-red-500"
                }
            case ENTER_VALUE: 
                return {
                    ...state,
                    showModal: true,
                    modalText: "Please Enter Value",
                    modalColor: "bg-red-200"
                }
            default:
                return state;
    }

}

export default Reducer
