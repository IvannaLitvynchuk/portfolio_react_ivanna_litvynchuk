import React from "react";

const About = () => {

    return (
        <section id="about" className="about">
            <h2 className="about-title">— About me —</h2>
            <div className="about-content">
                <div className="image">
                    <img src={require("../img/IMG_9209.jpeg")} style={{width: "350px", height: "467px"}} alt="avatar"/>
                </div>
                <div className="text">
                    <p>Hi, I'm Ivanna Litvynchuk. I've been a junior front-end developer for 4 months officially and more than a year unofficially, creating small pet projects.</p>
                    <p>For me, programming is not just a job, it's a hobby.</p>
                    <p>I'm open to new knowledge, I like to study new technologies and apply them in practice.</p>
                    <p>I am currently working on pet projects to improve my skills. I like the work process, and most of all it is the ability to immediately see the result of the written code. This work a the opportunity to turn templates into cool working sites, add dynamics and understand that now there are no limits to creativity in development. Officially, I do not have much experience in real projects, but I have a great desire to create, develop in this field, improve, Google to find the right solutions and not stop at the place of development.
                    </p>
                    <p>I have basic English, but i am actively studying this language</p>

                    <p><b>Skills:</b> HTML, CSS, JS, React, Jira, Postman, Bootstrap, Material Ul, Git (GitHub, GitLab etc.), RESTful API. HTTP, npm, etc.</p>
                    
                </div>
            </div>
        </section>
    )
}

export default About;