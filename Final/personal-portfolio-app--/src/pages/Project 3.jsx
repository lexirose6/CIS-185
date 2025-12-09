import {Container, Row, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import P3Screenshot1 from '../assets/images/project3 screenshot1.jpeg'
import P3Screenshot2 from '../assets/images/project3 screenshot 2.jpeg'
import P3Screenshot3 from '../assets/images/project3 screenshot 3.jpeg'
import vs2022 from '../assets/icons/vs2022.svg'

const Project3 = () => {
    return (
        <>
            <Container>
                <div className='space'>
                    <h1>Retrieving Data</h1>
                </div>
                <Row>
                    <Carousel>
                            <Carousel.Item>
                                <img src={P3Screenshot1} className="d-block w-100 big" alt="Application"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={P3Screenshot2} className="d-block w-100 big" alt="Code for populating application"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={P3Screenshot3} className="d-block w-100 big" alt="Code for getting items in a database"/>
                            </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <div className='space border'>
                        <h2>Description</h2>
                        <p>
                            Invoice Line Items is an application that displays invoices and 
                            additional information with the use of LINQ queiries.
                            The records are ordered by the date.
                        </p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Table columns</li>
                            <li>Invoice rows</li>
                            <li>InvoiceID</li>
                        </ul>
                    </div>
                    <div className='space border'>
                        <h3>Technology Used:</h3>
                        <ul>
                            <div>
                                <img className='icon-align' src={vs2022} alt="Visual Studio 2022 icon"></img>
                                <p className='text-container'>Visual Studio 2022</p>
                            </div>
                        </ul>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Project3