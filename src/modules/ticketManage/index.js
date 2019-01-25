

import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable"


// 按需加载
const RecoverList = Loadable({
    loader: () => import('./routers/recoverList'), loading: () => <div></div>
}); 
const RecoverDetail = Loadable({
    loader: () => import('./routers/recoverDetail'), loading: () => <div></div>
});

let routers = (props) => {
    return (
        <Switch>
            <Route path="/ticketManage/recoverList" exact 
                render={(props) => {
                    console.log(<RecoverList />)
                    return <RecoverList />
                }}
            />
            <Route path="/ticketManage/recoverDetail" exact 
                render={(props) => {
                    return <RecoverDetail />
                }}
            />
            <Route path="/ticketManage" exact 
                render={(props) => {
                    console.log(22)
                    return <RecoverList />
                }}
            />
        </Switch>
    )
}
export {
    routers
}

