import React from 'react'
import { Row, Col, Button, Container, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserImage from '../../svg/man.svg'

const BuyOnorCoins = () => {
    return (
        <React.Fragment>
            <Container className={"media-body"}>
                <h4 className={'header_h4 my-3'}>Buy ONOR Coins</h4>
                <Row className={'d-flex justify-content-center'}>
                    <Col sm={12} className={'d-flex justify-content-center'}>
                        <img src={UserImage} alt="user" style={{height: '40px', width: '40px'}} />&emsp;
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" disabled value={'username@onor'}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={2} className={'align-self-center'}>
                        <Form.Label>Quantity</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <Form.Control type={'text'} placeholder={'Quantity'}></Form.Control>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={2} className={'align-self-center'}>
                        <Form.Label>Order Total</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <Form.Control type={'text'} placeholder={'Order Total'}></Form.Control>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={2} className={'align-self-center'}>
                        <Form.Label>Payment Method</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <select class="form-control">
                            <option value="" disabled selected>--select payment method--</option>
                            <option value={'Credit Card'}>Credit Card</option>
                            <option value={'PayPal'}>PayPal</option>
                            <option value={'Net Banking'}>Net Banking</option>
                        </select>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={7} className={'align-self-center'}>
                        {/* <Button as={ Link } to={"/user/coins/"} variant="" className="onor_secondery_btn">Back</Button> */}
                        <Button as={ Link } to={"#"} variant="" className="onor_btn float-right">Checkout</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default connect()(BuyOnorCoins)