
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import * as actions from "../../actions/ticketListAction";
import "./index.less";

@connect(
    (state) => ({
        RecoverList: state.TicketManage_User
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
            <div className="User">
                <Helmet>
                    <title>思慕权益-我的</title>
                </Helmet>
                我的
            </div>
        )
    }
}

