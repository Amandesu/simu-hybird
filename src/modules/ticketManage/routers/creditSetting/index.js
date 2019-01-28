
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { List, InputItem } from "antd-mobile";
import * as actions from "../../actions/ticketListAction";
import "./index.less";

const Item = List.Item;
const prefix = "ticketManage-creditSetting";
@connect(
    (state) => ({
        OrderList: state.TicketManage_OrderList
    }), 
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_CREDITSETTING _CHANGE",payload}),
    }, dispatch)
)
export default class CreditSetting extends React.Component {
    state = {
        name:"",
        phone:""
    }
    componentDidMount(){
        this.autoFocusInst && this.autoFocusInst.focus();
    }
    render(){
        const { state, props } = this;
       
        return (
            <div className={prefix}>
                <Helmet>
                    <title>思慕权益-订单</title>
                </Helmet>
                <div className="content">
                    <List>
                        <Item extra={"支付宝"}>收款类型</Item>
                        <InputItem clear placeholder="请填写支付宝账号真实姓名" value={state.name} onChange={name => this.setState({name})}
                            >姓名</InputItem>
                        <InputItem clear placeholder="请填写支付宝账号手机账号" type='money' value={state.phone} onChange={phone => this.setState({phone})}
                        >手机号码</InputItem>
                         <InputItem clear placeholder="上传支付宝的本人收款二维码" disabled className="qrcode" value={state.phone} onChange={phone => this.setState({phone})}
                        >上传二维码</InputItem>


                    </List>
                </div>
                <div className="footer">
                    确认提交
                </div>
            </div>
        )
    }
}

