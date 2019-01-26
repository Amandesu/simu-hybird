
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/ticketListAction";
import "./index.less";

@connect(
    (state) => ({
        RecoverList: state.TicketManage_OrderList
    }), 
    (dispatch) => bindActionCreators(actions)
)
export default class RecoverList extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
    }
    render(){
        return (
            <div className="OrderList">OrderList</div>
        )
    }
}

