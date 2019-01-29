
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SearchBar } from "antd-mobile";
import { Helmet } from "react-helmet";
import { FooterTab, OrderItem } from "ticketManage/component";
import { NoContent } from "component";
import { callApi } from "Utils"
import "./index.less";

const prefix = "ticketManage-orderList";
@connect(
    (state) => ({
        OrderList: state.TicketManage_OrderList
    }), 
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_ORDERLIST_CHANGE",payload}),
        clearData: (payload) => ({type:"TICKETMANAGE_ORDERLIST_CLEAR",payload})
    }, dispatch)
)
export default class RecoverList extends React.Component {
    componentDidMount(){
        this.getOrderList();
    }
    // 获取订单列表
    getOrderList(){
        this.props.changeData({ loadding:true })
        callApi({
            url:"/simu/wechat/orderList",
            type:"POST",
            data: {
                "openId": "wenpeng",
                //"pageNum": 1,
                //"pageSize": 10,
            }
        }).then(res => {
            this.props.changeData({
                list: res.data.list || [],
                loadding:false
            })
        })
    }
    render(){
        const { state, props } = this;
        const OrderList = props.OrderList;
        const isActive = (status) => OrderList.status == status ? "active":"";
        const activeList = OrderList.list.filter(item => item.status == OrderList.status)
        return (
            <div className={prefix}>
                <Helmet>
                    <title>思慕权益-订单</title>
                </Helmet>
                <div className={prefix+"-header"}>
                    <div className="search" onClick={() => this.props.history.push("/ticketManage/orderSearch")}>
                        <SearchBar
                            placeholder="查询"
                            ref={ref => this.manualFocusInst = ref}
                            disabled={true}
                        />
                    </div>
                    <div className="tabs">
                        <div className={`tabItem ${isActive(-2)}`} onClick={() => this.props.changeData({status:-2})}>未验</div>
                        <div className={`tabItem ${isActive(0)}`} onClick={() => this.props.changeData({status:0})}>核验中</div>
                        <div className={`tabItem ${isActive(1)}`} onClick={() => this.props.changeData({status:1})}>有效券码</div>
                        <div className={`tabItem ${isActive(-1)}`} onClick={() => this.props.changeData({status:-1})}>无效券码</div>
                    </div>
                </div>
                <div className={prefix+"-list"}>
                    {activeList.map((item, index) => {
                        return (
                            <OrderItem item={item} className="item" key={index}/>
                        )
                    })}
                    { !activeList.length && OrderList.loadding == false ?
                        <NoContent />
                    : ""}
    
                    
                </div>
                <div className="footer">
                    <FooterTab />
                </div>
            </div>
        )
    }
}

