import React, { Component } from 'react'

export default class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:''
        }
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault()
        this.props.signupActions.userSignupRequest(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">PasswordConfirmation</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">注册</button>
                </div>
            </form>
        )
    }
}
