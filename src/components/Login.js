import React from 'react';
import './Login.css';

const Login = props => {

    const login = (event) => {
        event.preventDefault()
        console.log('login')
    }

    return (
        <div className="container">
            <form onSubmit={ login }>
                <div className="align-items-center">
                <h2 className="center">Chào mừng đến với hệ thống giám sát xe</h2>
                <input name="username" type="text" className="form-control" placeholder="Tên đăng nhập" required></input>
                <input name="pasword" type="password" className="form-control" placeholder="Mật khẩu" required></input>
                <div className="center">
                    <button type="submit">Login</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Login;