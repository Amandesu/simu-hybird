
import React from "react";
import {withRouter } from "react-router-dom"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./index.less";

const prefix = "ticketManage-component-FooterTab";
@connect(
    (state) => ({
        FooterTab: state.TicketManage_Component_FooterTab
    }), 
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_FOFOOTERTAB__CHANEGE",payload})
    })
)
class RecoverList extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    state = {
        activePage: "recover"
    }
    componentDidMount(){
    }
    render(){
        const { state, props } = this;

        return (
            <div className={prefix}>
                <div className={`recover ${state.activePage=="recover"?"active":""}`} 
                    onClick={() => {
                        this.setState({activePage:"recover"});
                        this.props.history.push("/ticketManage")
                    }}>
                    <div className="icon"></div>
                    <div className="text">回收</div>
                </div>
                <div className={`order ${state.activePage=="order"?"active":""}`}
                    onClick={() => {
                        this.setState({activePage:"order"});
                        this.props.history.push("/ticketManage/orderList")
                    }}>
                    <div className="icon"></div>
                    <div className="text">订单</div>
                </div>
                <div className={`user ${state.activePage=="user"?"active":""}`} 
                        onClick={() => {
                            this.setState({activePage:"user"})
                            this.props.history.push("/ticketManage/user")
                        }
                    }>
                    <div className="icon"></div>
                    <div className="text">我的</div>
                </div>
        </div>
        )
    }
}
export default withRouter(RecoverList)
