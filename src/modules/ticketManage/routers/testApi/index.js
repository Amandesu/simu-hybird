
import React from "react";
import { Helmet } from "react-helmet";
import { callApi } from "Utils"
import "./index.less";
import { promises } from "fs";
const prefix = "ticketManage-testApi";

//import "./a.js"
import { pbkdf2 } from "crypto";



export default class TestApi extends React.Component {
    state = {
        age:1
    }
    componentDidMount(){
       

    }
    renderApp(){
        function Child1(){
            console.log(1)
            return (
                <div>12</div>
            )
        }
        class App1 extends  React.Component{
            render(){
                return (
                    <div>
                        <Child1 />
                    </div>
                )
            }
        }
        class App2 extends  React.Component{
            render(){
                console.log(2)
                return (
                    <div>
                        
                    </div>
                )
            }
        }

        return <div>
            <App1 />
            <App2 />
        </div>
    }
    fetchApi(url){
        let getApi = new Promise((resolve, reject) => {
            getApi.abort = () => {
                reject()
            }
            fetch(url).then(res => {

            })
        })
        return getApi
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevState)
    }
    render(){
        return (
            <div className={prefix}>
                <Helmet>
                    <title>测试API</title>
                </Helmet>
                <div onClick = {() => {
                    this.setState({age:12})
                }}>点击</div>
                {this.renderApp() }
            </div>
        )
    }
}

