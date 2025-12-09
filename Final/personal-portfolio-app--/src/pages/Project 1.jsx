import {Container, Row, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Screenshot1 from '../assets/images/Doggy Delights Screenshot 1.jpeg';
import Screenshot2 from '../assets/images/Doggy Delights Screenshot 2.jpeg';
import Screenshot3 from '../assets/images/Doggy Delights Screenshot 3.jpeg';
import BootstrapIcon from '../assets/icons/Bootstrap.svg';
import VSCodeIcon from '../assets/icons/vscode.svg';

const Project1 = () => {
    return (
        <>
            <Container>
                <div className='space'>
                    <h1>Doggy Delights</h1>
                </div>
                <Row>
                    <Carousel>
                            <Carousel.Item>
                                <img src={Screenshot1} className="d-block w-100 big" alt="Home page"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Screenshot2} className="d-block w-100 big" alt="Location page"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Screenshot3} className="d-block w-100 big" alt="Suggestion page"/>
                            </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <div className='space border'>
                        <h2>Description</h2>
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
                    <div className='space border'>
                         <h3>Link: <a className="links" href="https://github.com/lexirose6/CIS-185/tree/main/Midterm">Github: Doggy Delights</a></h3>
                    </div>
                    <div className='space border'>
                        <h3>Technology Used:</h3>
                        <ul>
                            <div>
                                <img className='icon-align' src={VSCodeIcon} alt="Visual Studio Code icon"></img>
                                <p className='text-container'>Visual Studio Code</p>
                            </div>
                            <div>
                                <img className='icon-align' src={BootstrapIcon} alt="Bootstrap icon"></img>
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