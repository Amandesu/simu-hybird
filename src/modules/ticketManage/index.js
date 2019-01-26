

import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable"


// 按需加载
const Home = Loadable({
    loader: () => import('./routers/home'), loading: () => <div></div>
});

let routers = (props) => {
    return (
        <Switch>
            <Route path="/ticketManage" 
                render={(props) => {
                    return <Home />
                }}
            />
        </Switch>
    )
}
export {
    routers
}

