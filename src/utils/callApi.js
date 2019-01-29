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
function getData(type, data, dataType){
    if (dataType == "formData") {
        data = jsonFormData(data); 
    } 
    else if (type == "GET" && JSON.stringify(data) == `"{}"`) {
        data = "";
    } 
    else if (type == "POST") {
        data = JSON.stringify(data)
    }
    return data;
}
const callApi = ({url = "", type = "POST", data = {}, dataType="json"}) => {
    type = type.toUpperCase();
    data = getData(type, data, dataType);

    let requestHttp = request.post(url);    
    if (type == "GET") {
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
                console.log(reject)
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