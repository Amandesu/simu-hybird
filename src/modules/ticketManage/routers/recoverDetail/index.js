
import React from "react";
import { connect } from "react-redux";
import "./index.less";

console.log(44433)
@connect(
    (state) => ({
        recoverDetail: state.TicketManage_RecoverDetail
    }), 
    () => ({
        getList:dispatch => {
            return dispatch({type:"Kkk", payload:[12]})
        }
    })
)
export default class RecoverDetail extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    render(){
        return (
            <div className="recoverDetail">recoverDetail</div>
        )
    }
}

