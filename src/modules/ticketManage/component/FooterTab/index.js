
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
    }, dispatch)
)
class RecoverList extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    state = {
        activePage: "recover"
    }
    componentDidMount(){
        let page = this.props.location.pathname.match(/ticketManage\/(\w+)/);
        page &&  this.props.changeData({activePage:page[1]});
    }
    changeTab(activePage){
        if (this.props.FooterTab.activePage != activePage) {
            this.props.changeData({activePage});
            this.props.history.push(`/ticketManage/${activePage}`);
        }
    }
    isActive(page){
        return this.props.FooterTab.activePage == page ? "active":""
    }
    render(){
        const { state, props } = this;
        const FooterTab = props.FooterTab;
        return (
            <div className={prefix}>
                <div className={`recoverList ${this.isActive("recoverList")}`} onClick={() => this.changeTab("recoverList")}>
                    <div className="icon"></div>
                    <div className="text">回收</div>
                </div>
                <div className={`orderList ${this.isActive("orderList")}`} onClick={() => this.changeTab("orderList")}>
                    <div className="icon"></div>
                    <div className="text">订单</div>
                </div>
                <div className={`user ${this.isActive("user")}`} onClick={() => this.changeTab("user")}>
                    <div className="icon"></div>
                    <div className="text">我的</div>
                </div>
        </div>
        )
    }
}
export default withRouter(RecoverList)
