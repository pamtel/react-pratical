import {useState, useEffect, useReducer} from 'react'

    const ADD_PERSON = "ADD_PERSON";
    const CLOSE_MODAL = "CLOSE_MODAL";
    const CLEAR_ALL = "CLEAR_ALL";
    const HANDLE_DELETE = "HANDLE_DELETE"

    const initialState = {
        people: [],
        modalText:"",
        showModal: false,
        modalColor: ""
    };

    const reducer = (state, action) => {
        console.log(action);
        switch (action.type) {
            case ADD_PERSON:
                const newPerson = {id: new Date().getTime().toString(), name:action.payload}
                return{
                    ...state,
                    people: [...state.people, newPerson],
                    showModal: true,
                    modalText: `${action.payload} Added`,
                    modalColor: "bg-green-300"
                }
            case CLOSE_MODAL:
                return {
                    ...state,
                    showModal: false
                }
            case CLEAR_ALL:
                return {
                    ...state,
                    // all item deleted
                    people:[],
                    showModal:true,
                    modalText: "All items Deleted",
                    modalColor: "bg-red-300",
                }
            case HANDLE_DELETE:
                const deleteName = state.people.filter((person) => person.id !== action.payload)
                return {
                    ...state,
                    showModal: true,
                    modalText: `${action.payloadTwo} was deleted`,
                    people: deleteName,
                    modalColor: "bg-red-300",
                    
                }
            default:
                return state;
        }
    }
    
const  Form = ()  => {
        const [name, setName] = useState("")
        const [state, dispatch] = useReducer(reducer, initialState);

        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch({type: ADD_PERSON, payload: name});
            setName("");
        }
        const closeModal = () => {
            dispatch({type: CLOSE_MODAL})
        }
        const clearAll = () => {
            dispatch({type: CLEAR_ALL})
        }
        const handleDelete = (id, name) => {
            dispatch({type: HANDLE_DELETE, payload:id, payloadTwo:name})
        }
        console.log({state});
    // usereducer takes in at least 2 argument (or 3) and returns 
    // an array that contains the state and dispatch
    // the first argument is a reducer function - (A function)
    // the second argument is the initialState 0r defaultState - (An object)

    // Reducer function takes in two argument, the first one is state
    // and the second one is action
    // it must return a state

    // steps
    // 1. call your useReducer Hook
    // 2. create your reducer function
    // 3. create your initialState

    // The dispatch function, takes in an object with the type property
    // and a value which is the string
    return (
        <>
         <h2 className="font-bold">useReducer Hook</h2>

         {state.showModal && <Modal modalText={state.modalText} closeModal={closeModal} modalColor={state.modalColor}/>}
            <form className="m-auto w-4/5 bg-blue-300 mb-5" >
                <input
                 type="text"
                 name="firstName" 
                 placeholder="name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 className="ml-5 "/>
                  
                <button 
                type="Submit" 
                className="py-2 px-3 bg-gray-300 hover:bg-gray-600 hover:text-white rounded-md ml-11"
                onClick={handleSubmit}>
                    Add Person
                </button>
            </form>

            <ul className="w-5/6 m-auto">
                {state.people.map((person) => (
                    <li 
                    key={person.id}
                    className="bg-red-200 mb-3 flex justify-between">
                    <span>{person.name}</span>
                    <button 
                    className="text-red-400 hover:text-red-700"
                    onClick={() => handleDelete(person.id,person.name)}>Delete</button>
                    </li>
                 ))}
            </ul>
             
             <div className="ml-20">
                <button 
                className="bg-blue-200 px-3 py-2 rounded"
                onClick={clearAll}>
                    Clear All</button>
             </div>
            
        </>
        )
}

const Modal = ({modalText, closeModal, modalColor}) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 2000)
    }, [closeModal])

    return(
        <div className={`${modalColor} mx-20 text-center my-5`}>
            {modalText}
        </div>
    )
 }
 export default Form
