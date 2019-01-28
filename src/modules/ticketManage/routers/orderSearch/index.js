
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { OrderItem } from "ticketManage/component";
import * as actions from "../../actions/ticketListAction";
import "./index.less";

const prefix = "ticketManage-orderSearch";
let list = [{status:"2"}, {status:"3"}, {status:"4"},{status:"2"}, {status:"3"}, {status:"4"},{status:"2"}, {status:"3"}, {status:"4"}]
@connect(
    (state) => ({
        OrderSearch: state.TicketManage_OrderSearch
    }), 
    (dispatch) => bindActionCreators(actions)
)
export default class OrderSearch extends React.Component {
    state = {
        ticketCode : "",
        searchType:"code",
        list:[],
        codeList:[],
        dateList:[]
    }
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
    }
    onChangeSearchType(searchType){
        const { state, props } = this;
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
    onSearchCode(){
        if (this.state.ticketCode) {
            this.setState({
                list:list,
                codeList:list
            })
        }
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
                        <div className="buttom" onClick={() => this.onSearchCode()}>查询</div>
                    </div>

                    <div className={`searchDate ${isDisable("date")}`}>
                        我是时间查询
                    </div>
                 </div> 

                 <div className="list">
                    {state.list.map(item => {
                        return (
                            <OrderItem item={item} className="item"/>
                        )
                    })}
                 </div>
            </div>
        )
    }
}

