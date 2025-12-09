import { useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project1 = () => {
    return (
        <>
            <Container>
                <h1>Doggy Delights</h1>
                <Row>
                    
                    <img src="null" alt=""></img>
                    
                </Row>
                <Row>
                    <div>
                        <h2>Description</h2><br/>
                        <p>Doggy Delights is a website designed for a bakery that produces dog-friendly drinks and treats. 
                            The website includes a drink and pastry menu, along with holiday specials. 
                            It also inlcudes an about page, location page, and a suggestion page. 
                        </p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Interactive menu page.</li>
                            <li>Suggestion form for customers.</li>
                            <li>Address to the bakery with inlcuded link.</li>
                            <li>Interactive sidebar for pages not listed on the top navagation bar for laptop/tablet users.</li>
                            <li>Responsive design.</li>
                        </ul>
                    </div>
                    <div>
                         <h3>Link: <a href="https://github.com/lexirose6/CIS-185/tree/main/Midterm">Github: Doggy Delights</a></h3>
                    </div>
                    <div>
                        <h3>Technology Used:</h3>
                        <ul>
                            <div>
                                <img className='icon-align' src="null" alt="Visual Studio Code icon"></img>
                                <p className='text-container'>Visual Studio Code</p>
                            </div>
                            <div>
                                <img className='icon-align' src="null" alt="Bootstrap icon"></img>
                                <p className='text-container'>Bootstrap</p>
                            </div>
                        </ul>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Project1