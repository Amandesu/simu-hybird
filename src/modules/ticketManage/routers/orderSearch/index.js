
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DatePicker } from "antd-mobile";
import { OrderItem } from "ticketManage/component";
import { callApi } from "Utils";
import "./index.less";

const prefix = "ticketManage-orderSearch";
@connect(
    (state) => ({
        OrderSearch: state.TicketManage_OrderSearch
    }), 
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_ORDERSEARCH_CHANGE",payload}),
    }, dispatch)
)
export default class OrderSearch extends React.Component {
    state = {
        ticketCode : "",
        searchType:"code",
        startDate:"",
        endDate:"",
        list:[],
        codeList:[],
        dateList:[],
    }
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
    }
    onChangeSearchType(searchType){
        const { state, props } = this;
        let list = []
        if (searchType == "code") {
            list = state.codeList;
        } else {
            list = state.dateList;
        }
        this.setState({
            searchType,
            list
        })
    }
    getOrderList(params = {}){
        this.props.changeData({ loadding:true })
        return callApi({
            url:"/simu/wechat/orderList",
            type:"POST",
            data: {
                "openId": "wenpeng",
                ...params,
                
            }
        })
    }
    onSearchCode = () => {
        this.getOrderList({
            "voucherNo": this.state.ticketCode
        }).then(res => {
            this.setState({
                list:res.data.list || [],
                codeList:res.data.list || []
            })
        })
    }
    onSearchDate(){
       // if (this.state.ticketCode) {
            this.setState({
                list:list,
                dateList:list
            })
       // }
    }
    formatDate(date, format="yyyy-MM-dd hh:mm:ss"){
        let y = date.getFullYear(),
            M = date.getMonth()+1,
            d = date.getDate(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getUTCSeconds();
        M = M < 10 ? "0"+M:M;
        let map = new Map([
            [/y+/, y],
            [/M+/, M],
            [/d+/, d],
            [/h+/, h],
            [/m+/, m],
            [/s+/, s],
        ]);
        map.forEach((value, key) => {
            format = format.replace(key, value);
        })
        return format;
    }
    render(){
        const { state, props } = this;
        const isActive = searchType => state.searchType == searchType ? "active":"";
        const isDisable = searchType => state.searchType == searchType ? "":"disable";

        
        return (
            <div className={prefix}>
                 <div className="header">
                      <div className={`code ${isActive("code")}`} onClick={e => this.onChangeSearchType("code")}>券码查询</div>
                      <div className={`date ${isActive("date")}`} onClick={e => this.onChangeSearchType("date")}>时间查询</div>
                 </div>
                 
                 <div className="search">
                    <div className={`searchCode ${isDisable("code")}`}>
                        <div className="searchInput">
                            <input placeholder="请输入券码" onChange={e => this.setState({ticketCode:e.target.value})} value={state.ticketCode}/>
                            <img className="close" src={require("images/close-circle-fill.png")} onClick={() => this.setState({ticketCode:"", codeList:[], list:[]})}></img>
                        </div>
                        <div className="button" onClick={() => this.onSearchCode()}>查询</div>
                    </div>

                    <div className={`searchDate ${isDisable("date")}`}>
                        <DatePicker
                            mode="date"
                            title="Select Date"
                            extra="Optional"
                            value={state.startDate}
                            onChange={startDate => this.setState({ startDate })}
                            >
                            <div className="startDate">{state.startDate?this.formatDate(state.startDate, "yyyy-MM-dd"):"选择开始日期"}</div>
                        </DatePicker>
                        <span>至</span>
                        <DatePicker
                            mode="date"
                            title="Select Date"
                            extra="Optional"
                            minDate={state.startDate}
                            value={state.endDate}
                            onChange={endDate => this.setState({ endDate })}
                            >
                            <div className="endDate">{state.endDate?this.formatDate(state.endDate, "yyyy-MM-dd"):"选择结束日期"}</div>
                        </DatePicker>
                        <div className="button" onClick={() => this.onSearchDate()}>查询</div>
                    </div>
                 </div> 

                 <div className="list">
                    {state.list.map((item,index) => {
                        return (
                            <OrderItem item={item} className="item" key={index}/>
                        )
                    })}
                 </div>
            </div>
        )
    }
}

