
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/ticketListAction";
import "./index.less";

@connect(
    (state) => ({
        RecoverList: state.TicketManage_RecoverList
    }), 
    (dispatch) => bindActionCreators(actions)
)
export default class RecoverList extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div className="RecoverList">RecoverList</div>
        )
    }
}

