
import React from "react";
import { Helmet } from "react-helmet";
import { callApi } from "Utils"
import "./index.less";
const prefix = "ticketManage-testApi";


export default class TestApi extends React.Component {
    componentDidMount(){
        callApi({
            url:"/simu/wechat/voucherList",
            type:"POST",
            //data:{"pageNum": 0,"pageSize": 10}
        }).then(res => {
            console.log(res)
        })
    }
    render(){
        return (
            <div className={prefix}>
                <Helmet>
                    <title>测试API</title>
                </Helmet>
            </div>
        )
    }
}

