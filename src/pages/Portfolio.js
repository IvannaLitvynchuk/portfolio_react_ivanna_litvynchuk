import React, {useState} from "react";
import { projects } from "../data/projects";
import { TailSpin } from 'react-loader-spinner';

const Portfolio = () => {

const [loading, setLoading] = useState(true)
console.log(projects)
const onOpenModal = () => {
    console.log("work")
}
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-title">
                <h2>— Portfolio —</h2>
            </div>
            <div>
            { projects.length > 0 ?
                <div className='project-card-bg' >
                    {projects.map(project => (
                        <div className="container-projects">
                            <div className="project-card" key={project.id}>
                                <img className="project-card-img" src={project.image} style={{width: "300px", height: "250px"}} />
                                <button
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