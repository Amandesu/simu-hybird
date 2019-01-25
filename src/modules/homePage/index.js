

import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable"
// 按需加载
const Test1 = Loadable({
    loader: () => import('./routers/test1'), loading: () => <div></div>
}); 
const Test2 = Loadable({
    loader: () => import('./routers/test2'), loading: () => <div></div>
});

let routers = (props) => {
    return (
        <Switch>
            <Route path="/homePage/test1" exact 
                render={(props) => {
                    return <Test1 />
                }}
            />
            <Route path="/homePage/test2" exact 
                render={(props) => {
                    return <Test2 />
                }}
            />
            <Route path="/homePage" exact 
                render={(props) => {
                    return <Test1 />
                }}
            />
        </Switch>
    )
}
export {
    routers
}

