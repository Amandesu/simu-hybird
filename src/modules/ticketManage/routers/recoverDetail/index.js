
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Helmet } from "react-helmet";
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
        detail:  { source: []},

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

