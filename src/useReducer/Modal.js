import { useEffect } from 'react'

const Modal = ({closeModal,modalText, modalColor}) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 2000)
    }, [closeModal])

    return(
        <div className={`${modalColor} mx-10 text-center my-5 mt-0`}>
            {modalText}
        </div>
    )
}

export default Modal
