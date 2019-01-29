



export function getParamUrl(url = window.location.href){
    let obj = {}
    url.replace(/([^&?=]+)=([^&?=]+)/g, function(str, $1, $2){
        obj[$1] = $2
    })
    return obj
}