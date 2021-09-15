import React from 'react'
import Typed from 'react-typed'
import './header.css'

function Header() {
    return (
        <div className="hero-Text">
            <h1>Cory Fabian</h1>
            <br/>
            <Typed
                strings={[
                    '',
                    'Software Engineer',
                    'Software Developer',
                    'Cat Person',
                    'Programmer',
                    '',
                    'Problem Solver']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
        </div>
    )
}

export default Header