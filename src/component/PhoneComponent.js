import React from 'react';
import {Card, Button} from "react-bootstrap";
import {connect} from "react-redux";

const PhoneComponent = (props) => {

    return (
        <Card>
            <Card.Body>
                <Card.Title>Phone</Card.Title>
                <Card.Text>
                    Disponible : {props.phones}
                </Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        phones: state.phones
    }
}

export default connect(mapStateToProps)(PhoneComponent);