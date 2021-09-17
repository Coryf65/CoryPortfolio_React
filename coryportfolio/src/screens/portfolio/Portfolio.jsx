import React, { useState } from 'react';
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import GitHub from '../../images/GitHub_Logo.png'

function Portfolio() {
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({});

    function createModal(data) {
        return (
            <Modal 
                show={modalShow} 
                onHide={() => setModalShow(false)}
                size='lg'
                arial-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{data.summary}</p>
                    <Image src={data.image} style={{ width: '200px' }} />
                </Modal.Body>
                <a id='portfolio-modal-link' href={data.link} target='_blank' rel='noreferrer'>Got To Live Site</a>
                <Modal.Footer>
                    <div>Technologies Used: </div>
                    <p style={{ fontSize: '.7rem', marginRight: 'auto' }}>{data.tech}</p>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const mapped = portfolioData.map((e, index) => {
        return (
            <Card key={index} id='portfolio-card-container'>
                <Image className='porfolio-image' onClick={() => {
                    setTempData({
                        image: e.image,
                        link: e.link,
                        title: e.title,
                        summary: e.summary,
                        tech: e.tech
                    })
                    setModalShow(true)
                }}
                src={e.image}/>
                <div className='portfolio-click-info'>&#x1F50E;&#xFE0E;</div>
                {createModal(tempData)}
            </Card>
        )
    });

    return (
        <div className='portfolio-container' id='portfolio'>
            <h1>Portfolio</h1>
            <p>Check me out on <a href='https://github.com/Coryf65' target='_blank' rel='noreferrer'><img src={GitHub} alt="GitHub logo, an OctoCat. Links to CoryFabian's profile" width='100px' height='50px'/></a></p>
            <Container fluid='lg' style={{ padding: '2rem 0'}}>
                <Row>
                    {mapped}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
