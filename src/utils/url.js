



function urlParams(params){
    let arr = [];
    for (let key in params) {
        arr.push(key+"="+params[key])
    }
    return arr.length ? arr.join("&"): "";
}

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
export const locationSearch = {

    get(){
        return window.location.search.substring(1)
    },
    set(params, recoverOld = false) {
        let oldSearch = window.location.search.substring(1);
        let search = oldSearch;
        if (typeof params == "string") {
            search = params;
        } else {
            search= urlParams(params)
        }
        if (recoverOld) {
            search = (oldSearch && oldSearch+"&") +search
        }
        if (history.pushState) {
            history.pushState({}, "", `?${search}${location.hash}`);
        } else {
            window.location.search = search
        }
    },
    add(params) {
        return locationSearch.set(params, true)
    }
}

export function markUrl(url=window.location.href, params){
    if (url.indexOf("?") > -1) {
        return url + "&" + urlParams(params);
    } else {
        return url + "?" + urlParams(params);
    }
}