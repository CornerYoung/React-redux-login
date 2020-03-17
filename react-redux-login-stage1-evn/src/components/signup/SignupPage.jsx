import React, { Component } from 'react'
import SignupForm from './SignupForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as signupActions from '../../actions/signupActions'

class SingupPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm history={this.props.history} signupActions={this.props.signupActions}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signupActions:bindActionCreators(signupActions,dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SingupPage)
