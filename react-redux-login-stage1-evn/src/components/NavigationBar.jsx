import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Login功能</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navBar" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="#navBar">
                        <ul className="navbar-nav mr-auto">
                            <li role="presentation" className="nav-item">
                                <Link className="nav-link" to="/signup">注册</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
