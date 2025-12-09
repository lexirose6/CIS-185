import { Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css'
import websiteIcon from '../assets/icons/Web.svg'
import appIcon from '../assets/icons/Application.svg'
import databaseIcon from '../assets/icons/Database.svg'

const Home = () => {
    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col className="col-12 col-md-6 border space">
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
                            <Row className='p-3 border space'>
                                <h2>Education:</h2>
                                <p>In Progress: SPSCC - AAS Software Devolopment</p>
                            </Row>
                            <Row className='p-3 border space'>
                                <h2>Contact info:</h2>
                                <p>alexiarose6131@gmail.com</p>
                                <h2>Github:</h2><a href='https://github.com/lexirose6'>lexirose6</a>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <h1 className='space'>Projects</h1>
                </Row>
                <Row>
                    <Col className='col-12 col-md-4'>
                        <div className='card'>
                            <img src={websiteIcon} alt="Laptop icon"></img>
                            <h3 className='space'>Doggy Delights</h3>
                            <p>A multi-page website that showcases many menu items.</p>
                            <Button href="/Project1">Go to page</Button>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-4'>
                        <div className='card'>
                            <img src={appIcon} alt="Application icon"></img>
                            <h3 className='space'>Car Dealership Application</h3>
                            <p>A windows application that allows users to list cars for sale.</p>
                            <Button href="/Project2">Go to page</Button>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-4'>
                        <div className='card'>
                            <img src={databaseIcon} alt="Database icon"></img>
                            <h3 className='space'>Retrieving Data</h3>
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