
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RecoverItem } from "ticketManage/component"
import { ImagePicker, Modal } from 'antd-mobile';
import { callApi, getParamUrl } from "Utils";
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

        files:[{
            url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
            id: '2121',
          }, {
            url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            id: '2122',
          }]
    }
    componentDidMount(){
        this.getRecoverDetail()
    }
    getRecoverDetail(){
        let params = getParamUrl(this.props.location.search);
        console.log(params.voucherId)
        callApi({
            url:"/simu/wechat/voucherDetail",
            type:"GET",
            data: {
                voucherId:params.voucherId
            }
        }).then(res => {
            console.log(res)
        })
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    
    onImageClick(){

    }
    render(){
        let files = this.state.files
        return (
            <div className={prefix}>
                <div className={prefix+"-content"}>
                    <div className="detail">
                        <RecoverItem item={{voucherTitle:"test", price:"12"}}/>
                    </div>
                    <div className="notice">
                        <div className="title">来源及提醒</div>
                        <div className="content">
                            <ul>
                                <li>1、操作路径：动卡空间APP-首页-天天有券</li>
                                <li>2、请保证券码有效性，且保证有10天及以上有效期</li>
                                <li>3、请上传带有串码的图片，若上传的串码已被使用或错误，即便您已拿到货款，后续也会被追责，请卖家认真核实。</li>
                            </ul>
                        
                        </div>
                    </div>

                    <div className="messageWrite">
                        <div className="title">信息填写</div>
                        <div className="ticketInput">
                            <div className="text">券码</div>
                            <input placeholder="请输入兑换劵码"/>
                        </div>
                        <div className="ticketUpload">
                            <div className="text">上传图片</div>
                            <div className="imagesList">
                                <ImagePicker
                                     files={files}
                                     onChange={this.onChange}
                                     onImageClick={(index, fs) => console.log(index, fs)}
                                     selectable={files.length < 9}
                                     accept="image/gif,image/jpeg,image/jpg,image/png"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={prefix+"-footer"}>
                    提交
                </div>
            </div>
        )
    }
}

