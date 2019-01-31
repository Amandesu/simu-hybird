import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootRouter from "./main/routers";
import rootReduces from "./main/reduces";
import { WxAuth } from "Utils";

import "./index.less";
const store = createStore(rootReduces, {})
store.subscribe(data => {
})
class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                {rootRouter}
            </Provider>
        )
    }
}

WxAuth()

ReactDOM.render(
    <App />
, document.getElementById("root"))  