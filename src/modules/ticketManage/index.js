import React from "react";
import { Route, Switch } from "react-router-dom";
//import Loadable from "react-loadable";
import RecoverList from "./routers/recoverList";

 
function Loadable({loader, loading}){

    class AsyncComponent extends React.Component {
        state = {
            mod : function(){
                return <div>不支持按需加载</div>
            }
        }
        componentWillMount() {
            this.load();
        }
        load() {
            this.setState({
                mod: function(){
                    return <div></div>
                }
            });
             loader().then((mod) => {
                this.setState({
                    mod: mod.default ? mod.default : mod
                });
            });
        }
        render() {
            const M  = this.state.mod;
            return <React.Fragment>
                <M {...this.props}/>
            </React.Fragment>;
        }
    }
    return (props) => <AsyncComponent {...props} />
}
//const RecoverList = Loadable({
  //  loader: () => import(/* webpackChunkName: "RecoverList" */"./routers/RecoverList"),
    //loading: () => <div />
//});

const OrderList = Loadable({
    loader: () => import(/* webpackChunkName: "OrderList" */"./routers/orderList"),
    loading: () => <div />
});
const User = Loadable({
    loader: () => import(/* webpackChunkName: "User" */"./routers/user"),
    loading: () => <div />
}); 
const RecoverDetail = Loadable({
    loader: () => import(/* webpackChunkName: "RecoverDetail" */"./routers/recoverDetail"),
    loading: () => <div />
}); 
const OrderSearch = Loadable({
    loader: () => import(/* webpackChunkName: "OrderSearch" */"./routers/orderSearch"),
    loading: () => <div />
});
const CreditSetting = Loadable({
    loader: () => import(/* webpackChunkName: "CreditSetting" */"./routers/creditSetting"),
    loading: () => <div />
});
const AboutSimu = Loadable({
    loader: () => import(/* webpackChunkName: "AboutSimu" */"./routers/aboutSimu"),
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
