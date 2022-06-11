const ForgotPassword = () => {
    const username: string = '';
    return (
        <div>
            <form>
                <p>Forgot Password</p>
                <div className="form-control">
                    <label className="form-label">Email</label>
                    <input type="text" id="userName" value={username} />
                </div>
                <div className="btn-form-containner">Forgot Password</div>
            </form>
        </div>
    );
};

export default ForgotPassword;
