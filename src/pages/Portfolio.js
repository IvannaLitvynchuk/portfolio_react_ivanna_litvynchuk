import React, {useState} from "react";
import { projects } from "../data/projects";
import { TailSpin } from 'react-loader-spinner';
import Modal from "../components/Modal";

const Portfolio = () => {
const [modal, setModal] = useState(false)

const [projectId, setProjectId] = useState()
const [loading, setLoading] = useState(true)

const onOpenModal = (e) => {
    e.stopPropagation()
    setModal(true)
    setProjectId(Number(e.currentTarget.getAttribute("id")))
}

const onCloseModal = () => {
    setModal(false)
}
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-title">
                <h2>— Portfolio —</h2>
            </div>
            <div>
            {modal ?
                <>
                    <div className="window" onClick={onCloseModal}></div>
                    <div className="modal-window">
                        <Modal projectId={projectId} />
                        <button className="close-window" onClick={onCloseModal}>Close</button>
                    </div>
                </>:
            ""
            }
            { projects.length > 0 ?
                <div className='project-card-bg' >
                    {projects.map(project => (
                        <div className="container-projects" key={project.id}>
                            <div className="project-card" >
                                <img className="project-card-img" src={project.image} style={{width: "300px", height: "250px"}} />
                                <button id={project.id}
                                className="open-window"
                                onClick={onOpenModal} >
                                    <b>Details</b>
                                </button>
                            </div>
                        </div>
                    ))
                    }    
                </div>    
                :
                <p > no projects!</p>
                }
            </div>
        </section>
    )
}

export default Portfolio;