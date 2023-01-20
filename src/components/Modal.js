import React from 'react'


const Modal = () => {
    return (
        <>
            <div className="window" onClick={onClose}></div>
            <div className="modal-window">
                    my modal
                    <button className="close-window" onClick={onClose}>Close</button>
            </div>
        </>
    )
}
export default Modal;