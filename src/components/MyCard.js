import React, {Fragment} from "react";
import Card from "react-bootstrap/Card";

export default (props) => {
    const imageUrl = props.imageUrl
    return (
        <Fragment>
            <Card style={{width: '14rem', height: '14rem'}}>
                <Card.Img style={{width: '14rem', height: '14rem'}} variant="top" src={imageUrl}/>
                {/*<Card.Body>*/}
                {/*    <Card.Title>Card Title</Card.Title>*/}
                {/*    <Card.Text>*/}
                {/*        Some quick example text to build on the card title and make up the bulk of*/}
                {/*        the card's content.*/}
                {/*    </Card.Text>*/}
                {/*    <Button variant="">Go somewhere</Button>*/}
                {/*</Card.Body>*/}
            </Card>
        </Fragment>
    )
}