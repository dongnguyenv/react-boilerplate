const Register = () => {
    // will change to state and apply react-hooks-form here
    const email: string = '';
    const password: string = '';
    const firstName: string = '';
    const lastName: string = '';

    return (
        <div>
            <form>
                <p>Register</p>
                <div className="form-control">
                    <label className="form-label">Email</label>
                    <input type="text" id="userName" value={email} />
                </div>
                <div className="form-control">
                    <label className="form-label">First Name</label>
                    <input type="text" id="userName" value={firstName} />
                </div>
                <div className="form-control">
                    <label className="form-label">Last Name</label>
                    <input type="text" id="userName" value={lastName} />
                </div>
                <div className="form-control">
                    <label className="form-label">UserName</label>
                    <input type="password" id="password" value={password} />
                </div>
                <div className="btn-form-containner">Register</div>
            </form>
        </div>
    );
};

export default Register;
