import React from 'react'
import ReactDOM from 'react-dom/client'
import PortalReactDOM from 'react-dom'
import './menuModal.css'

function MenuModal({children}){
    return PortalReactDOM.createPortal(
       
        <div className='modal-container'>{children}</div>,
        document.getElementById('menu')
        

    )
}

export {MenuModal}