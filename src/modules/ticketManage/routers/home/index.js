
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/homeAction";
import "./index.less";

@connect(
    (state) => ({
        Home: state.TicketManage_Home
    }), 
    (dispatch) => bindActionCreators(actions)
)
export default class Home extends React.Component {
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

