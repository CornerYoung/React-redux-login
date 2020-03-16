import React, { Component } from 'react'
import classnames from 'classname'

export default class SignupForm extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            errors:{},
            isLoading:false
        }
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault()
        this.props.signupActions.userSignupRequest(this.state).then(
            ()=>{},
            ({ response }) => {
                this.setState({ errors: response.data, isLoading: false})
            }
        )
    }

    render() {
        const {errors,isLoading} = this.state
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
                        className={classnames('form-control',{'is-invalid':errors.username})}
                    />
                    {errors.username && <span>{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className={classnames('form-control', { 'is-invalid': errors.email })}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className={classnames('form-control', { 'is-invalid': errors.password })}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">PasswordConfirmation</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        className={classnames('form-control', { 'is-invalid': errors.passwordConfirmation })}
                    />
                    {errors.passwordConfirmation && <span>{errors.passwordConfirmation}</span>}
                </div>
                <div className="form-group">
                    <button disabled={isLoading} className="btn btn-primary">注册</button>
                </div>
            </form>
        )
    }
}
