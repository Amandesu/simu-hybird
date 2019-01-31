import callApi from "./callApi";
import { markUrl, queryUrl } from "./url";

const getWXopenUrl = () => {
    let url = "https://open.weixin.qq.com/connect/oauth2/authorize"
    let params = {
        appId:"wxef77eaf24420a6c6",
        redirect_uri:encodeURIComponent("http://47.106.206.152"),  // location.href.split('?')[0]
        response_type:"code",
        scope:"snsapi_userinfo",
        state:"STATE#wechat_redirect",
        connect_redirect:"1#wechat_redirect"
    }
    return markUrl(url, params)
}

const WxAuth = () => {
    //console.log(getWXopenUrl())

   

    

    return new Promise((resolve) => {
        //console.log(getWXopenUrl())
        //window.location.href = getWXopenUrl()
        //return 
        return resolve(11)
        let code = queryUrl("code");
        if (code) {
            // 如果拿到了code, 调用auth接口 获取openid
            callApi({
                url:"/simu/wechat/auth",
                type: "GET",
                data: {
                    code
                }
            }).then(res => {
                
            })
        } else {
            //http://47.106.206.152/simu/weixinServer/check
            // 没有拿到，调用checkAuth接口. 判断是否授权有效
            callApi({
                url:"/simu/wechat/checkAuth",
                type: "GET",
                data: {
                    code
                }
            }).then(res => {
                
            })
        }
        /**
         wx.config({
                debug: DEVELOPMENT, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: '', // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: '', // 必填，生成签名的时间戳
                nonceStr: '', // 必填，生成签名的随机串
                signature: '',// 必填，签名，见附录1
                jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
          */
    })
}


export default WxAuth;