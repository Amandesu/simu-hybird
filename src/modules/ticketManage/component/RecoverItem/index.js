import React from "react";
import PropTypes from "prop-types";

import "./index.less";
import { Item } from "antd-mobile/lib/tab-bar";
const prefix = "ticketManage-component-RecoverItem";

class RecoverItem extends React.Component {
    componentDidMount(){
        this.props.cachePosition && this.props.cachePosition(this.node)
    }
    render (){
        const { props } = this;
        const item = props.item;
        return (
            <div className={prefix} onClick={() => props.onClick && props.onClick()} ref={node => { this.node = node }} >
                <div className="cover">
                    <img src={item.picUrl || require("images/ticket.png")} />
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

}
RecoverItem.defaultProps = {
    item:{}
}
/*
RecoverItem.prototype = {
    onClick:PropTypes.func,
    item: PropTypes.object
} */ 

export default  RecoverItem