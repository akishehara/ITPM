import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import "./Landingpage.css";

const LandingPage = () => {
  return <div className='main'>

    <Container>
        <Row>
            <div className='intro-text'>
                <div>
                    <h1 className='title'> WEE GARAGE </h1>
                    <p className='subtitle'> Your Shop To The World</p>
                </div>
                    <div className='buttonContainer'>
                        <a href='/login'>
                            <Button>
                                Login 
                            </Button>
                        </a>
                    </div>
            </div>
        </Row>
    </Container>
  </div>
  
};

export default LandingPage
