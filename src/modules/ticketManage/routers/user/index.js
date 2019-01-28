
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FooterTab } from "ticketManage/component";
import { List } from "antd-mobile";
import * as actions from "../../actions/ticketListAction";
import "./index.less";

const Item = List.Item;
const prefix = "ticketManage-user";
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
        const { state, props } = this;
        return (
            <div className={prefix}>
                <Helmet>
                    <title>思慕权益-我的</title>
                </Helmet>
                <div className="content">
                    <div className="poster">
                        <div className="img">
                            <img src={require("images/user_white.png")}/>
                        </div>
                        <div className="text">fiveonelei</div>
                    </div>
                    <List>
                        <Item
                            thumb={require("images/credit_card.png")}
                            arrow="horizontal"
                            onClick={() => props.history.push("/ticketManage/creditSetting")}
                            extra={null}
                            >收款账号设置</Item>
                        <Item
                            thumb={require("images/message_alert.png")}
                            onClick={() => props.history.push("/ticketManage/aboutSimu")}
                            arrow="horizontal"
                            >关于思慕权益</Item>
                    </List>
                    
                </div>
                <div className="footer">
                    <FooterTab />
                </div>
            </div>
        )
    }
}

