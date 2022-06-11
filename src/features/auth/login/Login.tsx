const Login = () => {
    const username: string = '';
    const password: string = '';
    return (
        <div>
            <form>
                <p>LoginForm</p>
                <div className="form-control">
                    <label className="form-label">UserName</label>
                    <input type="text" id="userName" value={username} />
                </div>
                <div className="form-control">
                    <label className="form-label">UserName</label>
                    <input type="password" id="password" value={password} />
                </div>
                <div className="btn-form-containner">Login</div>
            </form>
        </div>
    );
};

export default Login;
