import { useState } from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css'
import Project3 from './Project 3.jsx';

const Home = () => {
    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col className="col-12 col-md-6">
                        <h1>About Me</h1>
                                <p>
                                    I'm a beginner programmer currently learning C#, SQL, HTML, CSS, and JavaScript. 
                                    Over the next few years I plan to learn more languages and add to my skillset.
                                </p>
                                <h2>Skills:</h2>
                                <ul>
                                    <li>Developing windows applications</li>
                                    <li>Designing websites</li>
                                    <li>Retrieving data with queries</li>
                                </ul>
                    </Col>
                    <Col className="col-12 col-md-6">
                        <Container>
                            <Row className='p-3'>
                                <h2>Education:</h2>
                                <p>In Progress: SPSCC - AAS Software Devolopment</p>
                            </Row>
                            <Row className='p-3'>
                                <h2>Contact info:</h2>
                                <p>alexiarose6131@gmail.com</p>
                                <h2>Github:</h2><a href='https://github.com/lexirose6'>lexirose6</a>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-12 col-md-4'>
                        <div className='card'>
                            <img src="null" alt=""></img>
                            <h3>Doggy Delights</h3><br/>
                            <p>A multi-page website that showcases many menu items.</p>
                            <Button href="/Project1">Go to page</Button>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-4'>
                        <div className='card'>
                            <img src="null" alt=""></img>
                            <h3>Car Dealership Application</h3><br/>
                            <p>A windows application that allows users to list cars for sale.</p>
                            <Button href="/Project2">Go to page</Button>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-4'>
                        <div className='card'>
                            <img src="null" alt=""></img>
                            <h3>Retrieving Data</h3><br/>
                            <p>Retrieves Invoice data with LINQ quieries and displays results onto a form.</p>
                            <Button href='/Project3'>Go to page</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home