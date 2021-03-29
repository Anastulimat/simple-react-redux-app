import React from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {buyTv} from "../redux/tv/actionTv";

const TvComponent = () => {

    // react-redux hook that replace mapStateToProps
    const tvs = useSelector(state => state.tvReducer.tv);
    const dispatch = useDispatch();

    return (
        <Card>
            <Card.Body>
                <Card.Title>TV</Card.Title>
                <Card.Text>
                    Disponible : {tvs}
                </Card.Text>
                <Button
                    variant="primary"
                    onClick={() => dispatch(buyTv())}
                >
                    Buy
                </Button>
            </Card.Body>
        </Card>
    )
}

export default TvComponent;