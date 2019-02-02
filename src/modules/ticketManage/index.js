import React from "react";
import { Route, Switch } from "react-router-dom";
import { Loadable } from "Utils";
import RecoverList from "./routers/recoverList";
import OrderList from "./routers/orderList";
import User from "./routers/user";
import RecoverDetail from "./routers/recoverDetail";
import OrderSearch from "./routers/orderSearch";
import CreditSetting from "./routers/creditSetting";
import AboutSimu from "./routers/aboutSimu";


//const RecoverList = Loadable({
  //  loader: () => import(/* webpackChunkName: "RecoverList" */"./routers/RecoverList"),
    //loading: () => <div />
//});

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
                    path="/ticketManage/recoverDetail/:voucherId"
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
            </Switch>
        </div>
        
    );
};
export { routers };
