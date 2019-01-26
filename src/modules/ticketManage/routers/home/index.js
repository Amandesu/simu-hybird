
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/homeAction";
import "./index.less";

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
    componentDidMount(){
        this.props.changeData({
            list:[1,2,3]
        })
    }
    render(){
        const { state, props } = this;
        return (
            <div className={prefix}>
                <div className="container">
                    <div className="content">
                        
                    </div>
                    <div className="footer">

                    </div>
                </div>
                
            </div>
        )
    }
}

