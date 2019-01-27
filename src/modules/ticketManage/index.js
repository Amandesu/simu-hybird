

import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable"


// 首页
const Home = Loadable({
    loader: () => import('./routers/home'), loading: () => <div></div>
});
const RecoverDetail = Loadable({
    loader: () => import('./routers/recoverDetail'), loading: () => <div></div>
});
const OrderSearch = Loadable({
    loader: () => import('./routers/orderSearch'), loading: () => <div></div>
});

let routers = (props) => {
    return (
        <Switch>
            <Route path="/ticketManage/orderSearch" 
                render={(props) => {
                    return <OrderSearch />
                }}
            />
            <Route path="/ticketManage/recoverDetail" 
                render={(props) => {
                    return <RecoverDetail />
                }}
            />
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

