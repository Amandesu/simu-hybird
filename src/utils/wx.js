import callApi from "./callApi";
import { markUrl, queryUrl } from "./url";

const getWXopenUrl = () => {
    let url = "https://open.weixin.qq.com/connect/oauth2/authorize";
    let { protocol, hostname, hash} = window.location;
    let params = {
        appId:"wxef77eaf24420a6c6",
        redirect_uri:encodeURIComponent(`${protocol}//${hostname}/${hash}`),  // location.href.split('?')[0]
        response_type:"code",
        scope:"snsapi_userinfo",
        state:"STATE#wechat_redirect",
        connect_redirect:"1#wechat_redirect"
    }
    return markUrl(url, params)
}
const checkAuth = () => {
    return new Promise((resolve, reject) => {

    })
}

export const isWeixin = function () { //判断是否是微信
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
};

export const WxAuth = (auth) => {
    
    return new Promise((resolve) => {
        // 判断是否在微信环境下面
        if (!isWeixin() || !auth) {
            resolve && resolve({})
            return
        }
        // 判断是否授权过
        let code = queryUrl("code");
        if (code) {
            // 如果拿到了code, 调用auth接口 获取openid
            callApi({
                url:"/simu/wechat/auth",
                type: "GET",
                data: {
                    code:code
                }
            }).then(res => {
                if (res.data.accessToken && res.data.openId) {
                    // oXf9j53b7u-7_Fyh1jnb5JrTGLoE
                    resolve && resolve(res.data);
                } else {
                    window.location.replace(getWXopenUrl());
                }
            })
        } else {
            window.location.replace(getWXopenUrl());
        }
    })
}
