
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FooterTab } from "ticketManage/component";
import { List } from "antd-mobile";
import { callApi, TmCache } from "Utils"
import "./index.less";

const Item = List.Item;
const prefix = "ticketManage-user";
@connect(
    (state) => ({
        User: state.TicketManage_User
    }), 
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_USER_CHANGE",payload}),
    }, dispatch)
)
export default class RecoverList extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
        this.getUserInfo()
    }
    getUserInfo(){
        callApi({
            url:"/simu/wechat/getWxUserInfo",
            type: "GET",
            data: {
                accessToken:TmCache.get("auth").accessToken,
                openId:TmCache.get("auth").openid
            }
        }).then(res => {
            this.props.changeData({
                userInfo:res.data || {}
            })
        })
    }
    render(){
        const { state, props } = this;
        const userInfo = props.User.userInfo;
        return (
            <div className={prefix}>
                <Helmet>
                    <title>思慕权益-我的</title>
                </Helmet>
                <div className="content">
                    <div className="poster">
                        <div className={`img ${!userInfo.headimgurl?"default":""}`}>
                            <img src={userInfo.headimgurl || ""} onError={(e)=>{e.target.onerror = null; e.target.src=require("images/user_white.png")}}/>
                        </div>
                        <div className="text">{userInfo.nickName}</div>
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

