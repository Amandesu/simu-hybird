import React from "react";
import PropTypes from "prop-types";

import "./index.less";
const prefix = "ticketManage-component-OrderItem";
const getStatusConf = (status) => {
    let map = new Map([ 
        [0, {cls: "checking", name: "核验中"}],
        [1, {cls: "validate", name: "有效"}],
        [-1, {cls: "invalid", name: "无效"}],
        [-2, {cls: "no-check", name: "未验"}],
        [-3, {cls: "invalid", name: "无效"}],
    ])
    return map.get(status) || {cls: "invalid", name: "无效"};
}
export default function OrderItem(props) {
    const item = props.item;
    const statusConf = getStatusConf(item.status); 
    return (
        <div className={`${prefix} ${props.className}`} onClick={e => console.log(1)}>
            <div className="header">
                <div className="title">{item.title}</div>
                <div className={`status ${statusConf.cls}`}>{statusConf.name}</div>
            </div>
            <div className="date">
                {item.createTime}
            </div>
            <div className="footer">
                <div className="ticketCode">
                    <img src={require("images/qrcode.png")}/> 36254125412
                </div>
                <div className="price">
                    ￥{item.price}
                </div>
            </div>
            {item.status == -2 ?
            <div className="withdraw">
                <div className="button" onClick={e =>{
                    e.stopPropagation();
                    props.onButtonClick && props.onButtonClick();
                }} >撤回</div>
            </div>:""}
        </div>
    )
}
OrderItem.prototype = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
    onButtonClick: PropTypes.func,
    //onClick:PropTypes.func
}