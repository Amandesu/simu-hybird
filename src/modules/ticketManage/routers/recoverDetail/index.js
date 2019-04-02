
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Helmet } from "react-helmet";
import { RecoverItem } from "ticketManage/component"
import { ImagePicker, Modal, Toast } from 'antd-mobile';
import { callApi, getParamUrl, TmCache } from "Utils";
import "./index.less";

const prefix = "ticketManage-recoverDetail";
@connect(
    (state) => ({
        recoverDetail: state.TicketManage_RecoverDetail
    }), 
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_RECOVERDETAIL_CHANGE",payload}),
    }, dispatch)
)
export default class RecoverDetail extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps){

    }
    state = {
        detail:  { source: []},
        voucherNo:"",
        voucherFile:[]
    }
    componentDidMount(){
        this.getRecoverDetail()
    }
    getRecoverDetail(){
        let params = this.props.match.params ||{};
        callApi({
            url:"/simu/wechat/voucherDetail",
            type:"GET",
            data: {
                voucherId:params.voucherId
            }
        }).then(res => {
            this.setState({detail:res.data||{}})
        })
    }
    submitVoucher = () => {
        let params = this.props.match.params ||{};
        let { voucherNo, voucherFile } = this.state;
        if (!voucherNo && !voucherFile.length) {
            return Toast.info("请输入券码或上传图片")
        }
        voucherFile = voucherFile.length ? voucherFile[0].url : "";

        Toast.loading("正在提交..", 20);
        callApi({
            url:`/simu/wechat/submitVoucher?voucherId=${params.voucherId}&openId=${TmCache.get("auth").openid}&voucherNo=${voucherNo}`,
            type:"POST",
            ContentType:"multipart/form-data",
            data: {
                voucherFile
            }
        }).then(res => {
            Toast.success("提交成功", 2, () => {
                this.props.history.push("/ticketManage/orderList")
            })
        })
    }
    onImageClick(){

    }
    render(){
        let voucherFile = this.state.voucherFile
        let voucherNo = this.state.voucherNo
        let detail = this.state.detail;
        return (
            <div className={prefix}>
                <Helmet>
                    <title>回收详情</title>
                </Helmet>
                <div className={prefix+"-content"}>
                    <div className="detail">
                        <RecoverItem item={{voucherTitle:detail.title, price:detail.price}}/>
                    </div>
                    <div className="notice">
                        <div className="title">来源及提醒</div>
                        <div className="content">
                            <ul>
                                { detail.source.map((item, index) => {
                                    return (<li key={index}>
                                        {item}
                                    </li>)
                                }) }
                            </ul>
                        
                        </div>
                    </div>

                    <div className="messageWrite">
                        <div className="title">信息填写</div>
                        <div className="ticketInput">
                            <div className="text">券码</div>
                            <input placeholder="请输入兑换劵码" value={voucherNo} onChange={e => this.setState({voucherNo:e.target.value})}/>
                        </div>
                        <div className="ticketUpload">
                            <div className="text">上传图片</div>
                            <div className="imagesList">
                                <ImagePicker
                                     files={voucherFile}
                                     onChange={voucherFile => this.setState({voucherFile})}
                                     onImageClick={(index, fs) => console.log(index, fs)}
                                     selectable={voucherFile.length < 1}
                                     accept="image/*" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={prefix+"-footer"} onClick={this.submitVoucher}>
                    提交
                </div>
            </div>
        )
    }
}

