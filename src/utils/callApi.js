import request from "superagent";
import { Toast } from "antd-mobile";


var formData = new FormData();
    formData.append('key1', 'value1');
    formData.append('key2', 'value2');

function jsonFormData(json){
    let formData = new FormData();
    for (let key in json) {
        formData.append(key, json[key])
    }
    return formData;

}
const callApi = ({url = "", type = "POST", data = {}}) => {
    type = type.toUpperCase();
    data = JSON.stringify(data);

    let requestHttp = request.post(url);    
    if (type == "GET") {
        if(JSON.stringify(data) == `"{}"`){
            data = "";
        }
        requestHttp = request.get(url).query(data);
    }
    let requestComplete = requestHttp
        .set('Content-Type', 'application/json')
        .timeout({deadline:"10000"})
        .send(data);

    return new Promise((resolve, reject) => {
        requestComplete.then(res => {
            if (res.status == 200 && res.body && res.body.code == 0) {
                resolve && resolve(res.body)
            } else {
                if (reject) {
                    reject(res)
                } else {
                    Toast.fail(res.body.msg, 2)
                }
            }
        }, err => {
            // 404 500等异常 业务不处理
            Toast.fail(err.status, 2)
        })
    })
}



export default callApi;