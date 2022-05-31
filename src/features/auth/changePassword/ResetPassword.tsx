const ResetPassword = () => {
    const username: string = '';
    const password: string = '';
    return (
        <div>
            <form>
                <p>Reset Password</p>
                <div className="form-control">
                    <label className="form-label">Current Password</label>
                    <input type="text" id="userName" value={username} />
                </div>
                <div className="form-control">
                    <label className="form-label">New Password</label>
                    <input type="password" id="password" value={password} />
                </div>
                <div className="btn-form-containner">Reset Password</div>
            </form>
        </div>
    );
};

export default ResetPassword;
