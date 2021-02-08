import {useState, useEffect} from 'react'

function FormUseState() {
    const [name, setName] = useState('')
    const [people, setPeople] = useState([])
    const [modalText, setModalText] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {id: new Date().getTime().toString(), name:name};
        setPeople([...people, newPerson])
        setModalText ("Item Added")
        setName("");
        setShowModal(true);
    }
    const handleDelete = (id) => {
        const deleteName = people.filter(person => {
            return person.id !== id
        })
        setShowModal(true)
        setModalText("Item Deleted")
        setPeople(deleteName)
        
    }
    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <>
        <h2>useState Hook</h2>
        { showModal && <Modal modalText={modalText} closeModal={closeModal}/>}
            <form className="mb-4 bg-blue-300" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="firstName" onChange={handleChange} value={name}/>
                <button type="Submit" className="py-2 px-3 bg-gray-300 hover:bg-gray-600 rounded-md ml-11">Add Person</button>
            </form>

            <ul>
                {people.map(person => 
                <li className="bg-red-200 mb-3 flex justify-between">
                <span>{person.name}</span>
                <button onClick={() => handleDelete(person.id)} className="">Delete</button>
                </li>)}
            </ul>
        </>
    )
}

const Modal = ({modalText, closeModal}) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 2000)
    }, [closeModal])
    return(
        <div>
            {modalText}
        </div>
    )
}

export default FormUseState