



export function getParamUrl(url = window.location.href){
    let obj = {}
    url.replace(/([^&?=]+)=([^&?=]+)/g, function(str, $1, $2){
        obj[$1] = $2
    })
    return obj
}
export function queryUrl(key){
    let reg = new RegExp(key+"=([^&?=]+)")
    let exec = reg.exec(window.location.href)
    return exec ? exec[1] : ""
}
export function markUrl(url=window.location.href, params){
    let arr = [];
    for (let key in params) {
        arr.push(key+"="+params[key])
    }
    if (url.indexOf("?") > -1) {
        return url + "&" + arr.join("&");
    } else {
        return url + "?" + arr.join("&");
    }
}