import React from 'react';
import {Card, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {buyPhone} from "../redux/phone/actionPhone";

const PhoneComponent = (props) => {

    console.log(props);

    return (
        <Card>
            <Card.Body>
                <Card.Title>Phone</Card.Title>
                <Card.Text>
                    Disponible : {props.phones}
                </Card.Text>
                <Button
                    variant="primary"
                    onClick={() => props.buyPhone()}
                >
                    Buy
                </Button>
            </Card.Body>
        </Card>
    )
}

/**
 * Redux method, help to get state from redux store and pass it to component via props
 * @param state
 * @returns {{phones: (number|*)}}
 */
const mapStateToProps = (state) => {
    return {
        phones: state.phones
    }
}

/**
 * Redux method, help to pass action from redux store to our component's props
 * @param dispatch
 * @returns {{buyPhone: (function(): *)}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        buyPhone: () => dispatch(buyPhone())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);