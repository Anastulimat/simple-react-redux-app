import {createStore, combineReducers, applyMiddleware} from "redux";
import phoneReducer from "./phone/reducerPhone";
import tvReducer from "./tv/reducerTv";
import commentReducer from "./comment/reducerComment";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    phoneReducer: phoneReducer,
    tvReducer: tvReducer,
    commentReducer: commentReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;