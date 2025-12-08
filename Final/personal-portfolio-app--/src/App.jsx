import { useState } from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
          <Container fluid>
                <Navbar.Brand href="#">
                    Alexia Wells
                </Navbar.Brand>
                <Nav className ="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                </Nav>
          </Container>
      </Navbar>
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
                      <li>...</li>
                    </ul>
          </Col>
          <Col className="col-12 col-md-6">
          <Container>
            <Row className='p-3'>
              <h2>Education:</h2>
              <p>...</p>
            </Row>
            <Row className='p-3'>
              <h2>Contact info:</h2>
              <p>alexiarose6131@gmail.com</p>
              <h2>Github:</h2><a href='https://github.com/lexirose6'>lexirose6</a>
            </Row>
          </Container>

            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
