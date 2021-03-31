import React from "react";
import {connect} from "react-redux";
import {apiCall} from "../redux/comment/actionComment";

const CommentComponent = ({apiData, apiComment}) => {

    //console.log(apiData);

    React.useEffect(() => {
        apiComment();
    }, [apiComment]);

    const displayApiData = apiData.isLoading ? (
            <p>Loading...</p>
            )
            : apiData.error ? (
                <p>{apiData.error}</p>
            )
            :
            (
                apiData.comments.map(comment => {
                    return(
                        <div key={comment.id} className="comments">
                            <p>{comment.body}</p>
                        </div>
                    )
                })
            );


    return(
        <>
            <h2>Comments</h2>
            <hr/>
            {displayApiData}
        </>
    )
}

const mapStateToProps = state => {
    return {
        apiData: state.commentReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        apiComment: () => dispatch(apiCall()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);