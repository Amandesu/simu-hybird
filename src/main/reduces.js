

import { combineReducers } from "redux";

var context = require.context("../modules", true, /\.\/(\w+?)\/reduce\.js$/);
var reduces = {};

context.keys().forEach(key => {
    let exp = context(key);
    for (let name in exp) {
        reduces[name] = exp[name];
    }
})

export default combineReducers({
    ...reduces
})

