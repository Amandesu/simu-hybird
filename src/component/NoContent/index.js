import React from "react";
import PropTypes from "prop-types";
import "./index.less";
const prefix = "component-NoContent";

export default function NoContent(props) {
    return (
        <div className={prefix}>
            <div className="images"><img src={require("images/empty_content.png")}/></div>
            <div className="text">{props.text || "暂无内容"}</div>
        </div>
    )
}

NoContent.prototype = {
    text:PropTypes.string,
}
