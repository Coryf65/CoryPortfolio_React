import React from 'react'
import './techLogos.css'
import DevIcon from 'devicon-react-svg'
import {techs} from '../../helpers/techs'

function TechLogos() {
    return (
        <div className='tech-container' id='technologies'>
            <div>
                <h1 style={{textAlign: 'center'}}>Tech that I 💗</h1>
            </div>
            <div className='tech-cards-container'>
                {techs.map((e, index) => {
                    return (
                        <div key={index} className='tech-card'>
                            <DevIcon className='tech-icons' icon={e.iconName}/>
                            <span style={{margin: '5px', fontSize: '1rem'}}>{e.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TechLogos
