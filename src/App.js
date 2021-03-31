import './App.css';
import PhoneComponent from "./component/PhoneComponent";
import store from "./redux/store";
import {Provider} from "react-redux";
import TvComponent from "./component/TvComponent";
import CommentComponent from "./component/CommentComponent";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <PhoneComponent />
            <TvComponent />
            <CommentComponent />
        </div>
    </Provider>
  );
}

export default App;
