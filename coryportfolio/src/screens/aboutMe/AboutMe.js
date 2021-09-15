import React from 'react'
import './aboutMe.css'
import me from '../../images/me_circle.png'

function AboutMe() {
    return (
        <div className='about-container' id='about-me'>
            <div>
                <img src={me} id='my-image' alt="Cory Fabian, headshot smiling with a background of water." />
            </div>
            <div className='about-text'>
                <h1>About Me</h1>
                <p>Making cool software is my passion! Software is challenging and rewarding due to the effect it
                    has on others. Creating ideas into a reality, to benefit others, is what drives me. Striving towards
                    making the codebase and tooling extraordinary excites me. Learning from others, and teaching
                    others, allows us to do anything as a team.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
