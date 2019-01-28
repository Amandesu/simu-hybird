
import React from "react";
import { Helmet } from "react-helmet";
import "./index.less";
const prefix = "ticketManage-aboutSimu";

export default class AboutSimu extends React.Component {
    componentDidMount(){
    }
    render(){
        return (
            <div className={prefix}>
                <Helmet>
                    <title>关于思慕权益</title>
                </Helmet>
                <div className="images">
                    <img src={require("images/simu.jpg")}/>
                </div>
                <div className="content">
                思慕权益是一家权益资源回收的公司，思慕权益是
一家权益资源回收的公司，思慕权益是一家权益资
源回收的公司，思慕权益是一家权益资源回收的公
司。
                </div>
            </div>
        )
    }
}

