import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import RecoverList from "./routers/recoverList";

/* const RecoverList = Loadable({
    loader: () => import("./routers/recoverList"),
    loading: () => <div />
}); */
const OrderList = Loadable({
    loader: () => import("./routers/orderList"),
    loading: () => <div />
});
const User = Loadable({
    loader: () => import("./routers/user"),
    loading: () => <div />
}); 
const RecoverDetail = Loadable({
    loader: () => import("./routers/recoverDetail"),
    loading: () => <div />
}); 
const OrderSearch = Loadable({
    loader: () => import("./routers/orderSearch"),
    loading: () => <div />
});
const CreditSetting = Loadable({
    loader: () => import("./routers/creditSetting"),
    loading: () => <div />
});
const AboutSimu = Loadable({
    loader: () => import("./routers/aboutSimu"),
    loading: () => <div />
});
const TestApi = Loadable({
    loader: () => import("./routers/testApi"),
    loading: () => <div />
});

let routers = (props) => {
    return (
        <div className="ticketManage-home">
            <Switch>
                <Route
                    path="/ticketManage/recoverList"
                    render={(props) => {
                        return <RecoverList {...props}/>;
                    }}
                />
                <Route
                    path="/ticketManage/orderList"
                    render={(props) => {
                        return <OrderList {...props} />;
                    }}
                />
                <Route
                    path="/ticketManage/user"
                    render={(props) => {
                        return <User {...props} />;
                    }}
                />
                <Route
                    path="/ticketManage/orderSearch"
                    render={(props) => {
                        return <OrderSearch />;
                    }}
                />
                <Route
                    path="/ticketManage/recoverDetail"
                    render={(props) => {
                        return <RecoverDetail {...props} />;
                    }}
                />
                <Route
                    path="/ticketManage/creditSetting"
                    render={(props) => {
                        return <CreditSetting />;
                    }}
                />
                <Route
                    path="/ticketManage/aboutSimu"
                    render={(props) => {
                        return <AboutSimu />;
                    }}
                />
                <Route
                    path="/ticketManage/testApi"
                    render={(props) => {
                        return <TestApi />;
                    }}
                />
                <Route
                    path="/ticketManage"
                    render={(props) => {
                        return <Home />;
                    }}
                />
            </Switch>
        </div>
        
    );
};
export { routers };
