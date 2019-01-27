
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/ticketListAction";
import { Helmet } from "react-helmet";
import { FooterTab } from "ticketManage/component";
import { RecoverItem } from "ticketManage/component"
import "./index.less";

const prefix = "ticketManage-recoverList";

@connect(
    (state) => ({
        RecoverList: state.TicketManage_RecoverList
    }), 
    (dispatch) => bindActionCreators(actions)
)
export default class RecoverList extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
    }
    render(){
        const list = [1, 2, 3, 4, 5, 6, 7];
        return (
            <div className={prefix}>
                <Helmet>
                    <title>思慕权益</title>
                </Helmet>
                <div className="content">
                    <div className="declaration">
                        <div className="title">公告</div>
                        <div className="content">
                            所有出售票券权益有效期需＞5天，多数票券采用预结
        算方式回款，回款后不代表不售后！
                    </div>
                    </div>
                    <div className="recoverList">
                        <div className="title">回收列表</div>

                        <div className="list">
                            {list.map((_, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <RecoverItem
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

