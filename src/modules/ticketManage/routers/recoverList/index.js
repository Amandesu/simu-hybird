
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FooterTab } from "ticketManage/component";
import { RecoverItem } from "ticketManage/component"
import { callApi } from "Utils"
import "./index.less";

const prefix = "ticketManage-recoverList";

@connect(
    (state) => ({
        RecoverList: state.TicketManage_RecoverList
    }), 
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_RECOVERLIST_CHANGE",payload}),
    }, dispatch)
)
export default class RecoverList extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
        this.getNoticeMsg();
        this.getRecoverList();
    }
    // 获取公共信息
    getNoticeMsg(){
        callApi({
            url:"/simu/wechat/queryNotice",
            type:"GET",
        }).then(res => {
            this.props.changeData({
                noticeMsg: res.data || {}
            })
        })
    }
    // 获取回收列表
    getRecoverList(){
        callApi({
            url:"/simu/wechat/voucherList",
            type:"POST",
        }).then(res => {
            this.props.changeData({
                list: res.data.list || []
            })
        })
    }
    render(){
        const { state, props } = this;
        const RecoverList = props.RecoverList;
        const { list, noticeMsg } = RecoverList;
        return (
            <div className={prefix}>
                <Helmet>
                    <title>思慕权益</title>
                </Helmet>
                <div className="content">
                    <div className="declaration">
                        <div className="title">公告</div>
                        <div className="content">
                            {noticeMsg.description}
                    </div>
                    </div>
                    <div className="recoverList">
                        <div className="title">回收列表</div>
                        <div className="list">
                            {list.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <RecoverItem
                                            item = {item}
                                            onClick={() => this.props.history.push("/ticketManage/recoverDetail")}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <FooterTab />
                </div>
            </div>
        )
    }
}

