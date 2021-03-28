import './App.css';
import PhoneComponent from "./component/PhoneComponent";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <PhoneComponent />
        </div>
    </Provider>
  );
}

export default App;
