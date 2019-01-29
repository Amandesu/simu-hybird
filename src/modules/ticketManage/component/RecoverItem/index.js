import React from "react";
import PropTypes from "prop-types";

import "./index.less";
import { Item } from "antd-mobile/lib/tab-bar";
const prefix = "ticketManage-component-RecoverItem";

export default function RecoverItem(props) {
    const item = props.item;
    return (
        <div className={prefix} onClick={() => props.onClick && props.onClick()} >
            <div className="cover">
                <img src={require("images/recoverList.png")} />
            </div>
            <div className="decs">
                <div className="text">
                    {item.voucherTitle}
                </div>
                <div className="price">
                    ￥{item.price}
                </div>
            </div>
        </div>
    )
}
RecoverItem.defaultProps = {
    item:{}
}
RecoverItem.prototype = {
    onClick:PropTypes.func,
    item: PropTypes.object
}