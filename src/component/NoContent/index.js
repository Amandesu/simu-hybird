import React from "react";
import "./index.less";
const prefix = "component-NoContent";

export default function(props) {
    return (
        <div className={prefix}>
            <div className="images"><img src={require("images/empty_content.png")}/></div>
            <div className="text">暂无内容</div>
        </div>
    )
}

