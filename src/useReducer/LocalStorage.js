import {useState,useReducer} from 'react'
import Modal from "./Modal";
import Reducer from "./Reducer";
import {ADD_SINGLE_ITEM, CLEAR_ITEMS, CLOSE_MODAL, HANDLE_DELETE, ENTER_VALUE} from "./Reducer"

    const initialState = {
        AllItems: [],
        showModal: false,
        modalText: "",
        modalColor: ""
    }

    const LocalStorage = () => {
    const [singleItem, setSingleItem] = useState("")
    const [state, dispatch] = useReducer(Reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(singleItem.trim()) {
            dispatch({type: ADD_SINGLE_ITEM, payload: singleItem})
        }else {
            dispatch({type: ENTER_VALUE})
        }
        setSingleItem("");
    }

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL})
    }

    const handleDelete = (id, singleItem) => {
        dispatch({type: HANDLE_DELETE, payload: id, payloadTwo: singleItem})
    }

    const clearItems = () => {
        dispatch({type: CLEAR_ITEMS})
    }
    console.log({state});
    
    return (
        <div className=" bg-gray-50 mt-16 pt-10 pb-8 ml-32 mr-32 rounded shadow-md md:pr-96 md:pl-96">
            <fieldset className="text-center">
                {state.showModal && <Modal modalText={state.modalText} closeModal={closeModal} modalColor={state.modalColor}/>}
                <legend className="mb-5 font-bold text-xl">Grocery Bud</legend>
                <input 
                type="text" 
                placeholder="e.g. eggs" 
                value={singleItem}
                onChange={(e) => setSingleItem(e.target.value)}
                className="bg-gray-200 pl-4 m"/>

                <button 
                type="submit" 
                onClick={handleSubmit}
                className="bg-blue-400 text-white px-3 rounded-r-md">Submit</button>
            </fieldset>
        
            <div className="mt-10 text-center mx-4">
                {/* <ul className="flex justify-between m-7">
                    <li>{localStorage.getItem('protein', 'Fish')}</li>
                    <li>{localStorage.getItem('carbonhydrate', 'Sausage')}</li>
                    <button className="bg-red-600 px-3 rounded-sm text-white">Delete</button>
                </ul> */}
                
                <ul>
                    {state.AllItems.map((grocery) => (
                        <li className="flex justify-between m-7"
                        key={grocery.id}>
                            <span>{grocery.singleItem}</span>
                            <button className="bg-red-600 px-3 rounded-sm text-white"
                            onClick={() => handleDelete(grocery.id, grocery.singleItem)}>Delete</button>
                        </li>
                    ))}
                    
                </ul>
                <button 
                onClick={clearItems}
                className="text-red-600 font-bold mt-10 border-none px-2">Clear Items</button>
            </div>
        </div>
    )
}


export default LocalStorage