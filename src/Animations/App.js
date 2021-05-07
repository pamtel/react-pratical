import React, {useState} from 'react'
import './App.css'

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const showModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false)
    return (
        <div className="text-center">
            <h1>React Animations</h1>
            <Modal modalIsOpen={modalIsOpen} close={closeModal}/>
            <Backdrop modalIsOpen={modalIsOpen} close={closeModal}/>
            <button 
                onClick={() => 
                showModal()} 
                className="border bg-purple-500 px-3 py-2">
                    OpenModal
            </button>
            <h3>Animating Lists</h3>
            <List/>
        </div>
    )
}

    const List = () => {
        const [items, setItems] = useState([1, 2, 3]);
        const addItemHandler = () => {
            setItems((prevItems) => [...prevItems, prevItems.length + 1])
        }

        const removeItemHandler = (idx) => {
            setItems((prevItems) => prevItems.filter((item, index) => idx !== index))
        }
        return (
            <div>
                <button className="border bg-yellow-400 py-2 px-3" onClick={() => addItemHandler()}>
                    Add Item
                </button>
    
                <ul className="w-3/12 mx-auto">
                    {items.map((item, idx) => {
                        return <li className="cursor-pointer border-2" key={idx} onClick={() => removeItemHandler(idx)}>
                            {item}
                        </li>
                    })}
                </ul>
            </div>
        )
    }

   
   
    
    const Modal = ({modalIsOpen, close}) => {
        const style = modalIsOpen? "ModalOpen" : "ModalClose"; 
        return(
            <div className={`${style} Modal`}>
                <h1>A Modal</h1>
                <button className="border bg-purple-500 py-2 px-3" onClick={() => close()}>Dismiss</button>
            </div>
        )
    }

    const Backdrop = ({modalIsOpen, close}) => {
        const style = modalIsOpen? "ModalOpen" : "ModalClose"; 
        return (
            <div onClick={() => close()} className={`${style} Backdrop`}>
        </div>
        )
    }
export default App
