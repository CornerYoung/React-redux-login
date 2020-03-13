import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/App'
import SingupPage from './components/singup/SingupPage'
console.log(SingupPage)
export default (
    <div className="container">
        <Route exact path="/" component={App}></Route>
        <Route path="/singup" component={SingupPage}></Route>
    </div>
)