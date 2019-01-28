
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SearchBar } from "antd-mobile";
import { Helmet } from "react-helmet";
import { FooterTab, OrderItem } from "ticketManage/component";
import * as actions from "../../actions/ticketListAction";
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
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
    }
    render(){
        const { state, props } = this;
        const OrderList = props.OrderList;
        const isActive = (status) => OrderList.status == status ? "active":"";

        let list = [{
            status:"2"
        }, {
            status:"3"
        }, {
            status:"2"
        },{
            status:"4"
        },{
            status:"3"
        },{
            status:"4"
        },{
            status:"3"
        }, {
            status:"2"
        },{
            status:"4"
        },{
            status:"3"
        },{
            status:"4"
        }]
        list = list.filter(item => OrderList.status == "1" ||item.status == OrderList.status);
       
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
                        <div className={`tabItem ${isActive("1")}`} onClick={() => this.props.changeData({status:"1"})}>全部</div>
                        <div className={`tabItem ${isActive("2")}`} onClick={() => this.props.changeData({status:"2"})}>核验中</div>
                        <div className={`tabItem ${isActive("3")}`} onClick={() => this.props.changeData({status:"3"})}>有效券码</div>
                        <div className={`tabItem ${isActive("4")}`} onClick={() => this.props.changeData({status:"4"})}>无效券码</div>
                    </div>
                </div>
                <div className={prefix+"-list"}>
                    {list.map((item) => {
                        return (
                            <OrderItem item={item} className="item"/>
                        )
                    })}
    
                    
                </div>
                <div className="footer">
                    <FooterTab />
                </div>
            </div>
        )
    }
}

