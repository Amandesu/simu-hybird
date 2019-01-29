
import {  handleActions } from 'redux-actions';
import { combineReducers } from "redux";

// 每个路由中的状态
var context = require.context("../modules", true, /\.\/(\w+?)\/reduce\.js$/);
var reduces = {};
context.keys().forEach(key => {
    let exp = context(key);
    for (let name in exp) {
        reduces[name] = exp[name];
    }
})
// 顶级状态  (simu)
/* export const Simu_State = handleActions(
    {
        ["SIMU_CHANGE"]: (state, action )=> {
            return { ...state,...action.payload };
        },
        ["SIMU_CLEAR"]: (state, action )=> {
            return {
               
            };
        }
    },
    {
        openid:"",
        loadding
    }
) */

export default combineReducers({
    ...reduces
})

