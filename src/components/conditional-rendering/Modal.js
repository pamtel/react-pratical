import {useState} from 'react'

function Modal() {
    const [switchModal, setSwitchModal] = useState(true)
    const toggleModal = () => {
        setSwitchModal(!switchModal)
    }
    return (
        <div>
            {switchModal ? <h1>This is a modal</h1> : null}
            <button onClick={toggleModal}>{switchModal ? "Hide Modal" : "Show Modal"}</button>
        </div>
    )
}

export default Modal
 