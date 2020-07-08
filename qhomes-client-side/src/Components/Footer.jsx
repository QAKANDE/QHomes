import React, { Component } from 'react';
import {Row,Col,Container} from 'react-bootstrap'
class Footer extends Component {  
    render() { 
        return ( 
            <>
            <Container>
            <Row className="mx-5">
                <Col>
                <a href="/">About Us</a><br></br>
                <a href="/">Careers</a>
                </Col>
                <Col>
                <a href="/">Contact Us</a><br></br>
                <a href="/">Privacy Policy</a>
                </Col>
                <Col>
                <a href="/">Terms Of Use</a><br></br>
                <a href="/">Mission Statement</a>
                </Col>
                <Col>
                <div className="mt-2">
                <i class="fa fa-twitter-square fa-3x"></i>
                <i className="fa fa-instagram fa-3x mx-4"></i>
                <i class="fa fa-facebook-f fa-3x"></i>
                </div>
                </Col>
            </Row>
            <div className="d-flex justify-content-center">
            <p><i class="fa fa-copyright"></i>Copyright 2020 Archi-Kraft Consults</p>
            </div>
            <div className="d-flex justify-content-center">
            <p>All Rights Reserved. <span>Powered by <span>Quadri Akande</span></span></p>
            </div>
            </Container>
            </>
         );
    }
}
 
export default Footer;