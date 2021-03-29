import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Card, Button} from "react-bootstrap";
import {buyPhone} from "../redux/phone/actionPhone";

const PhoneComponent = () => {

    // react-redux hook that replace mapStateToProps
    const phones = useSelector(state => state.phones);
    const dispatch = useDispatch();

    return (
        <Card>
            <Card.Body>
                <Card.Title>Phone</Card.Title>
                <Card.Text>
                    Disponible : {phones}
                </Card.Text>
                <Button
                    variant="primary"
                    onClick={() => dispatch(buyPhone())}
                >
                    Buy
                </Button>
            </Card.Body>
        </Card>
    )
}

export default PhoneComponent;