
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/ticketListAction";
import "./index.less";

const prefix = "ticketManage-orderSearch";
@connect(
    (state) => ({
        OrderSearch: state.TicketManage_OrderSearch
    }), 
    (dispatch) => bindActionCreators(actions)
)
export default class OrderSearch extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
    }
    render(){
        return (
            <div className={prefix}>
                orderSearch
            </div>
        )
    }
}

