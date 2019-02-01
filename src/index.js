import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootRouter from "./main/routers";
import rootReduces from "./main/reduces";
import { WxAuth, TmCache , locationSearch} from "Utils";
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
// 经过微信授权
WxAuth(false).then(res => {
    TmCache.put("auth", {
        openid:"wenpeng" || "oXf9j53b7u-7_Fyh1jnb5JrTGLoE"
    })
    ReactDOM.render(
        <App />
    , document.getElementById("root"))  
    //window.location.search = "";
    //window.location.replace("http://192.168.194.34:8080/#/ticketManage/recoverList")
})

