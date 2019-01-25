

import React from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory}  from "history"

var context = require.context("../modules", true, /\.\/(\w+?)\/index\.js$/);
var routers = []

context.keys().forEach((key) => {
    routers.push(context(key).routers)
}) 

export default <React.Fragment>
    <Router history={createHashHistory()}>
        <React.Fragment>
            {routers.map((Route,index) => {
                return <Route key={index}/>
            })}
        </React.Fragment>
    </Router>
</React.Fragment>

