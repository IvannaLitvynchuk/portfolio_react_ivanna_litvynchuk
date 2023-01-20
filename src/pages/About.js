import React from "react";

const About = () => {

    return (
        <section id="about" className="about">
            <h2 className="about-title">— About me —</h2>
            <div className="about-content">
                <div className="image">
                    <img src="https://i.pinimg.com/originals/38/84/29/388429c6e034fa4fce9e58fd3f5cd0fe.png" alt="avatar"/>
                </div>
                <div className="text">
                    <p>Hi, I'm Ivanna Litvynchuk. I've been a junior front-end developer for 4 months now.</p>
                    <p>For me, programming is not just a job, it's a hobby.</p>
                    <p>I'm open to new knowledge, I like to study new technologies and apply them in practice.</p>
                    <p><b>Skills:</b> HTML, CSS, JS, Vue</p>
                </div>
            </div>
        </section>
    )
}

export default About;