import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { List, InputItem, ImagePicker, Modal, Toast } from "antd-mobile";
import { callApi, TmCache } from "Utils";
import "./index.less";

const Item = List.Item;
const prefix = "ticketManage-creditSetting";
@connect(
    (state) => ({
        CreditSetting: state.TicketManage_CreditSetting
    }),
    (dispatch) => bindActionCreators({
        changeData:(payload) => ({type:"TICKETMANAGE_CREDITSETTING _CHANGE",payload}),
    }, dispatch)
)
export default class CreditSetting extends React.Component {
    state = {
        
    };
    componentDidMount() {

        this.queryPayInfo();
    }
    queryPayInfo() {
        callApi({
            url:"/simu/wechat/queryPayInfo",
            type:"POST",
            data:{
                openId:TmCache.get("auth").openid
            }
        }).then(res => {
            const data = res.data || {};
            this.props.changeData({
                payinfo:{
                    alipayName:data.alipayName,
                    alipayNo:data.alipayNo,
                    files:data.alipayUrl  ?[{
                        url: data.alipayUrl || 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                        id: '2122',
                    }]:[]
                }
            })
        })
    }
    saveOrUpdatePayInfo(){
        const { state, props } = this;
        const payinfo = props.CreditSetting.payinfo;
        callApi({
            url:`/simu/wechat/saveOrUpdatePayInfo?openId=${TmCache.get("auth").openid}&alipayNo=${payinfo.alipayNo}&alipayName=${payinfo.alipayName}`,
            type:"POST",
            dataType: "formData",
            data:{
                file: payinfo.files[0].url
            }
        }).then(res => {
            if (res.data.ret == true) {
                Toast.success("保存成功", 2);
                this.queryPayInfo()
            }
        })
    }
    changePayInfo(params){
        const payinfo = this.props.CreditSetting.payinfo;
        this.props.changeData({
            payinfo:{
                ...payinfo,
                ...params
            }
        })
    }
    onChange = (files, type, index) => {
        this.changePayInfo({
            files
        });
    };
    render() {
        const { state, props } = this;
        const payinfo = props.CreditSetting.payinfo;
        const disabledSumbit = !payinfo.alipayName || !payinfo.alipayNo || !payinfo.files.length;
        return (
            <div className={prefix}>
                <Helmet>
                    <title>收款账户设置</title>
                </Helmet>
                <div className="content">
                    <List>
                        <Item extra={"支付宝"}>收款类型</Item>
                        <InputItem
                            clear
                            placeholder="请填写支付宝账号真实姓名"
                            value={payinfo.alipayName}
                            onChange={(alipayName) => this.changePayInfo({ alipayName })}
                        >
                            姓名
                        </InputItem>
                        <InputItem
                            clear
                            placeholder="请填写支付宝账号手机账号"
                            type="money"
                            value={payinfo.alipayNo}
                            onChange={(alipayNo) => this.changePayInfo({ alipayNo })}
                        >
                            手机号码
                        </InputItem>
                        <InputItem
                            clear
                            placeholder="上传支付宝的本人收款二维码"
                            disabled
                            className="qrcode"
                        >
                            上传二维码
                        </InputItem>
                        <div className="imagesList">
                            <ImagePicker
                                files={payinfo.files}
                                onChange={this.onChange}
                                onImageClick={(index, fs) =>
                                    console.log(index, fs)
                                }
                                onAddImageClick={() => console.log(11)}
                                selectable={payinfo.files.length < 1}
                                accept="image/gif,image/jpeg,image/jpg,image/png"
                            />
                        </div>
                    </List>
                </div>
                <div className={`footer ${disabledSumbit? "disabled":""}`} onClick={() => {
                    console.log(11)
                    if (!disabledSumbit) {
                        Modal.alert('提示', '请确保您的收款信息是正确的（如果由于个人的收款信息填写错误造成的损失，本人自行负责）', [
                            { text: '取消', onPress: () => {} },
                            { text: '确定', onPress: () => this.saveOrUpdatePayInfo() },
                          ])
                        
                    } else {
                        let info = "请填完所有信息"
                        if (!payinfo.alipayName) {
                            info = "请输入真实姓名"
                        } else if (!payinfo.alipayNo) {
                            info = "请输入手机号码"
                        } else if (!payinfo.files.length) {
                            info = "请输入上传二维码"
                        }
                        Toast.info(info, 1)
                    }
                }}>确认提交</div>
            </div>
        );
    }
}
