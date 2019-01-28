import React from "react";
import PropTypes from "prop-types";

import "./index.less";
const prefix = "ticketManage-component-OrderItem";
const getStatusConf = (status) => {
    let map = new Map([ 
        ["2", {cls: "checking", name: "核验中"}],
        ["3", {cls: "validate", name: "有效"}],
        ["4", {cls: "invalid", name: "无效"}],
    ])
    return map.get(status);
}
export default function OrderItem(props) {
    const item = props.item;
    const statusConf = getStatusConf(item.status); 
    return (
        <div className={`${prefix} ${props.className}`}>
            <div className="header">
                <div className="title">星巴克大杯--中信（库存多库存多库存多库存多)</div>
                <div className={`status ${statusConf.cls}`}>{statusConf.name}</div>
            </div>
            <div className="date">
                2017-04-19 12:24
            </div>
            <div className="footer">
                <div className="ticketCode">
                    <img src={require("images/qrcode.png")}/> 36254125412
                </div>
                <div className="price">
                    ￥120
                </div>
            </div>
        </div>
    )
}
OrderItem.prototype = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
    //onClick:PropTypes.func
}