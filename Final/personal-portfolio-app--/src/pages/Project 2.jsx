import {Container, Row, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import P2Screenshot1 from '../assets/images/project2 screenshot 2.jpeg'
import P2Screenshot2 from '../assets/images/project2 screenshot 3.jpeg'
import P2Screenshot3 from '../assets/images/project2 screenshot 4.jpeg'
import vs2022 from '../assets/icons/vs2022.svg'


const Project2 = () => {
    return (
        <>
            <Container>
                <div className='space'>
                    <h1>Car Delearship Application</h1>
                </div>
                <Row>
                    <Carousel>
                            <Carousel.Item>
                                <img src={P2Screenshot1} className="d-block w-100 big" alt="Car listing application"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={P2Screenshot2} className="d-block w-100 big" alt="Code"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={P2Screenshot3} className="d-block w-100 big" alt="Code"/>
                            </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <div className='space border'>
                        <h2>Description</h2>
                        <p>
                            The Car Dealership Application is a windows application 
                            that allows the user to upload, delete, or comment on a car listing if they are logged in.
                            The user can filter cars by make, color, age, or price.
                        </p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Log in form</li>
                            <li>Log out button</li>
                            <li>Filter</li>
                            <li>Comment form</li>
                            <li>Upload form</li>
                            <li>Delete form</li>
                        </ul>
                    </div>
                    <div className='space border'>
                        <h3>Technology Used:</h3>
                        <ul>
                            <div>
                                <img className='icon-align' src={vs2022} alt="Visual Studio Code icon"></img>
                                <p className='text-container'>Visual Studio Code</p>
                            </div>
                        </ul>
                    </div>
                </Row>
            </Container>            
        </>
    )
}

export default Project2