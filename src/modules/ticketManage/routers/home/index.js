
import React from "react";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/homeAction";
import { FooterTab } from "ticketManage/component";
import { Helmet } from "react-helmet";
import Loadable from "react-loadable";
import "./index.less";

const RecoverList = Loadable({loader: () => import('../recoverList'), loading: () => <div></div>});
const OrderList = Loadable({loader: () => import('../orderList'), loading: () => <div></div>});
const User = Loadable({loader: () => import('../user'), loading: () => <div></div>});

const prefix = "ticketManage-home";
@connect(
    (state) => ({
        Home: state.TicketManage_Home
    }), 
    dispatch => bindActionCreators(actions, dispatch)
)
export default class Home extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){
    }
    state = {
        activePage: "recover"
    }
    componentDidMount(){
        this.props.changeData({
            list:[1,2,3]
        })
    }
    getList(){

    }
    render(){
        const { state, props } = this;
        return (
            <div className={prefix}>
                <Switch>
                    <Route path="/ticketManage/recoverList" exact 
                        render={(props) => {
                            return <RecoverList {...props}/>
                        }}
                    />
                    <Route path="/ticketManage/orderList" exact 
                        render={(props) => {
                            return <OrderList {...props}/>
                        }}
                    />
                    <Route path="/ticketManage/user" exact 
                        render={(props) => {
                            return <User {...props}/>
                        }}
                    />
                    <Route path="/ticketManage" exact 
                        render={(props) => {
                            return <RecoverList {...props}/>
                        }}
                    />
                </Switch>
            </div>
        )
    }
}

