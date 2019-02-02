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
WxAuth(true).then(data => {
    // 存储用户授权信息
    TmCache.put("auth", {
        openid:data.openId || "wenpeng"
    })
    ReactDOM.render(
        <App />
    , document.getElementById("root"))  
})

