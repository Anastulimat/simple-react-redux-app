import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Card, Button} from "react-bootstrap";
import {buyPhone} from "../redux/phone/actionPhone";

const PhoneComponent = () => {

    const [totalPhone, setTotalPhone] = useState(1);

    // react-redux hook that replace mapStateToProps
    const phones = useSelector(state => state.phoneReducer.phones);
    const dispatch = useDispatch();

    return (
        <Card>
            <Card.Body>
                <Card.Title>Phone</Card.Title>
                <Card.Text>
                    Disponible : {phones}
                </Card.Text>
                <input type="text" value={totalPhone} onChange={(e) => setTotalPhone(e.target.value)}/>
                <Button
                    variant="primary"
                    onClick={() => dispatch(buyPhone(totalPhone))}
                >
                    Buy
                </Button>

            </Card.Body>
        </Card>
    )
}

export default PhoneComponent;