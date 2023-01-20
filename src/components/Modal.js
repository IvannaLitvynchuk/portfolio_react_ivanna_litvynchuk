import React, {useState} from 'react'
import { projects } from "../data/projects";

const Modal = (props) => {
    
    const projectId = props.projectId;
    // console.log(projectId)
    const item = projects.find(element => element.id === projectId)
    // console.log(item)
    return (
        <>
            <div>
                <h3 className="window-title">{item.title}</h3>
                <p className="window-text">You can see the project code at the following link: <a href={item.link_into_github}>{item.title.toLowerCase()}</a>.</p>
                <p className="window-text">You can see the project site at the following link: <a href={item.link_into_site}>{item.title.toLowerCase()}</a>.</p>
                <p className="window-text">{item.description}</p>
            </div>
        </>
    )
}
export default Modal;