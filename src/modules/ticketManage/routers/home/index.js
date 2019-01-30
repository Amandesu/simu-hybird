
import React from "react";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FooterTab } from "ticketManage/component";
import { Helmet } from "react-helmet";
import Loadable from "react-loadable";
import RecoverList from '../recoverList';
import "./index.less";


const OrderList = Loadable({loader: () => import('../orderList'), loading: () => <div></div>});
const User = Loadable({loader: () => import('../user'), loading: () => <div></div>});

const prefix = "ticketManage-home";
@connect(
    (state) => ({
        Home: state.TicketManage_Home
    }), 
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_HOME__CHANEGE",payload}),
    }, dispatch)
)
export default class Home extends React.Component {
    state = {
    }
    componentDidMount(){
        
    }
    render(){
        const { state, props } = this;
        return (
            <div className={prefix}>
                <Switch>
                    <Route path="/ticketManage/recoverList" exact 
                       /*  render={(props) => {
                            return <RecoverList {...props}/>
                        }} */
                        component={RecoverList}
                    />
                    {/* <Route path="/ticketManage/orderList" exact 
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
                    /> */}
                </Switch>
            </div>
        )
    }
}

