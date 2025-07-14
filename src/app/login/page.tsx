import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.scss'

const page = () => {
    return (
        <div className="auth-main bg-light min-vh-100">
            <div  className=" container">
                <div className="auth-form ">
                    <div className="auth-header py-2">
                        <a href="#"><img src="../assets/images/logo-dark.svg" alt="img" /></a>
                    </div>
                    <div style={{ maxWidth: '500px' }} className="card my-5 auth-wrapper v3 container  mx-auto w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-end mb-4">
                                <h3 className="mb-0"><b>Login</b></h3>
                                <a href="#" className="link-primary">Don't have an account?</a>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="d-flex mt-1 justify-content-between">
                                <div className="form-check">
                                    <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" />
                                    <label className="form-check-label text-muted" htmlFor="customCheckc1">Keep me sign in</label>
                                </div>
                                <h6 className="text-primary f-w-400">Forgot Password?</h6>
                            </div>
                            <div className="d-grid mt-4">
                                <button type="button" className="btn btn-brand">Login</button>
                            </div>
                            <div className="saprator mt-3">
                                <span>Login with</span>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="d-grid">
                                        <button type="button" className="btn mt-2 btn-light-primary bg-light text-muted">
                                            <img src="../assets/images/authentication/google.svg" alt="img" /> <span className="d-none d-sm-inline-block"> Google</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="d-grid">
                                        <button type="button" className="btn mt-2 btn-light-primary bg-light text-muted">
                                            <img src="../assets/images/authentication/twitter.svg" alt="img" /> <span className="d-none d-sm-inline-block"> Twitter</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="d-grid">
                                        <button type="button" className="btn mt-2 btn-light-primary bg-light text-muted">
                                            <img src="../assets/images/authentication/facebook.svg" alt="img" /> <span className="d-none d-sm-inline-block"> Facebook</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="auth-footer row my-5">
                        {/* <!-- <div className=""> --> */}
                        <div className="col my-1 mb-0">
                            <p className="m-0">Copyright © <a href="#">Codedthemes</a></p>
                        </div>
                        <div className="col-auto my-1">
                            <ul className="list-inline footer-link mb-0 mx-5">
                                <li className="list-inline-item"><a href="#">Home</a></li>
                                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                                <li className="list-inline-item"><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                        {/* <!-- </div> --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;