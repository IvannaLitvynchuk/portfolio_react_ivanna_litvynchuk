import React, {useState, useContext} from "react"
import { projects } from "../data/projects"

const Project = () => {
    
    
    const [projectId, setProjectId] = useState(Number(project.id))
    
    const onOpenModal = (e) => {
        e.preventDefault()
        setProjectId(Number(project.id))
        console.log(Number(project.id))
    }
    
    

    return (
        <div className="container-projects" 
        >
            <div className="project-card">
                <img className="project-card-img" src={project.image} style={{width: "300px", height: "250px"}} />
                <button
            className="open-window"
            onClick={onOpenModal} >
                <b>Details</b>
            </button>
            </div>
            
        </div>
    )
}