import React from "react";
import PropTypes from "prop-types";

import "./index.less";
const prefix = "ticketManage-component-RecoverItem";

export default function RecoverItem(props) {
    return (
        <div className={prefix} onClick={() => props.onClick && props.onClick()} >
            <div className="cover">
                <img src={require("images/recoverList.png")} />
            </div>
            <div className="decs">
                <div className="text">
                星巴克大杯--中信（库存多，回款慢提交了请耐心等待。）
                </div>
                <div className="price">
                    ￥7.5
                </div>
            </div>
        </div>
    )
}
RecoverItem.prototype = {
    onClick:PropTypes.func
}