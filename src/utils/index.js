


export { default as callApi } from "./callApi";

export { 
    getParamUrl,
    queryUrl,
    markUrl,
    locationSearch
} from "./url";

export { 
    WxAuth,
    isWeixin
} from "./wx";


export { 
    TmCache,
    hpCache
} from "./cache";
// 防抖
export function throttle(fn, threhold) {
    let timeout = null;
    let startTime = +new Date()
    return function(...args){
        clearTimeout(timeout)
        let endTime = + new Date();
        if (endTime -startTime >= threhold) {
            fn.apply(this, args);
            startTime = endTime;
        } else {
            timeout = setTimeout(function(){
                fn.apply(this, args);
            }, threhold)
        }
    }
}



export { default as Loadable} from "./loadable";
