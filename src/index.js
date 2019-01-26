import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootRouter from "./main/routers";
import rootReduces from "./main/reduces";

import "./index.less";
const store = createStore(rootReduces, {})


class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                {rootRouter}
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />
, document.getElementById("root")) 