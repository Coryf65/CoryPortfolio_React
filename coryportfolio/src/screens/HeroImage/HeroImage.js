import React from 'react'
import Particles from 'react-particles-js';
import './heroImage.css'

function HeroImage() {
    return (
        <div>
           <Particles
                params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 2
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} /> 
        </div>
    )
}

export default HeroImage
