import React from "react";
import "./Feedback.scss";
import { Row, Col, Card, Container } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import exp1 from "../images/exp1.png";
import exp2 from "../images/exp2.png";
import exp3 from "../images/exp3.png";
import exp4 from "../images/exp4.png";
import exp5 from "../images/exp5.png";
import exp6 from "../images/exp6.png";
import exp7 from "../images/exp7.png";
import exp8 from "../images/exp8.png";

function Feedbacks() {
return (
<Container>
  <Row md={12} className={"beauty_head mb-4 mb-lg-0"}>
    <Col md={6}>
      <h2 className="font-weight-bolder first_head">Onor Beauty Experts</h2>
    </Col>
    <Col md={6}>
      <h5 className="font-weight-bold second_head">200+ Expert available</h5>
    </Col>
  </Row>
  <Row xs={2} md={4} style={{ justifyContent: 'space-evenly' }}>
    <Card style={{ width: '250px' }} className="border-0">
      <Card.Img variant="top" src={exp1} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Maria Reva</Card.Title>
        <Card.Text style={{ color: 'gray' }}>
          CIDESCO
        </Card.Text>
        <Card.Text style={{ color: 'gray' }}>
          8+ years experience
        </Card.Text>
        <Card.Text>
          134 Sessions on Onor World
        </Card.Text>
        <span>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar color="#F6AF25" />
                  ))}
               <text className="text-dark"> 5.0</text>  
        </span>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '250px' }} className="border-0">
      <Card.Img variant="top" src={exp2} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Maria Reva</Card.Title>
        <Card.Text style={{ color: 'gray' }}>
          CIDESCO
        </Card.Text>
        <Card.Text style={{ color: 'gray' }}>
          8+ years experience
        </Card.Text>
        <Card.Text>
          134 Sessions on Onor World
        </Card.Text>
        <span>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar color="#F6AF25" />
                  ))}
                  <text className="text-dark"> 5.0</text>
        </span>
      </Card.Body>
    </Card>

    <Card style={{ width: '250px' }} className="border-0">
      <Card.Img variant="top" src={exp3} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Maria Reva</Card.Title>
        <Card.Text style={{ color: 'gray' }}>
          CIDESCO
        </Card.Text>
        <Card.Text style={{ color: 'gray' }}>
          8+ years experience
        </Card.Text>
        <Card.Text>
          134 Sessions on Onor World
        </Card.Text>
        <span>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar color="#F6AF25" />
                  ))}
              <text className="text-dark"> 5.0</text>
        </span>
      </Card.Body>
    </Card>

    <Card style={{ width: '250px' }} className="border-0">
      <Card.Img variant="top" src={exp4} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Maria Reva</Card.Title>
        <Card.Text style={{ color: 'gray' }}>
          CIDESCO
        </Card.Text>
        <Card.Text style={{ color: 'gray' }}>
          8+ years experience
        </Card.Text>
        <Card.Text>
          134 Sessions on Onor World
        </Card.Text>
        <span>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar color="#F6AF25" />
                  ))}
            <text className="text-dark"> 5.0</text>
        </span>
      </Card.Body>
    </Card>

    <Card style={{ width: '250px' }} className="border-0">
      <Card.Img variant="top" src={exp5} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Maria Reva</Card.Title>
        <Card.Text style={{ color: 'gray' }}>
          CIDESCO
        </Card.Text>
        <Card.Text style={{ color: 'gray' }}>
          8+ years experience
        </Card.Text>
        <Card.Text>
          134 Sessions on Onor World
        </Card.Text>
        <span>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar color="#F6AF25" />
                  ))}
         <text className="text-dark"> 5.0</text>
        </span>
      </Card.Body>
    </Card>

    <Card style={{ width: '250px' }} className="border-0">
      <Card.Img variant="top" src={exp6} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Maria Reva</Card.Title>
        <Card.Text style={{ color: 'gray' }}>
          CIDESCO
        </Card.Text>
        <Card.Text style={{ color: 'gray' }}>
          8+ years experience
        </Card.Text>
        <Card.Text>
          134 Sessions on Onor World
        </Card.Text>
        <span>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar color="#F6AF25" />
                  ))}
         <text className="text-dark"> 5.0</text>
        </span>
      </Card.Body>
    </Card>

    <Card style={{ width: '250px' }} className="border-0">
      <Card.Img variant="top" src={exp7} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Maria Reva</Card.Title>
        <Card.Text style={{ color: 'gray' }}>
          CIDESCO
        </Card.Text>
        <Card.Text style={{ color: 'gray' }}>
          8+ years experience
        </Card.Text>
        <Card.Text>
          134 Sessions on Onor World
        </Card.Text>
        <span>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar color="#F6AF25" />
                  ))}
      <text className="text-dark"> 5.0</text>
        </span>
      </Card.Body>
    </Card>

    <Card style={{ width: '250px' }} className="border-0">
      <Card.Img variant="top" src={exp8} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Maria Reva</Card.Title>
        <Card.Text style={{ color: 'gray' }}>
          CIDESCO
        </Card.Text>
        <Card.Text style={{ color: 'gray' }}>
          8+ years experience
        </Card.Text>
        <Card.Text>
          134 Sessions on Onor World
        </Card.Text>
        <span>
          {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar color="#F6AF25" />
                  ))}
          
        </span>
        <text className="text-dark"> 5.0</text>
      </Card.Body>
    </Card>
  </Row>
</Container>
  );
}

export default Feedbacks;
