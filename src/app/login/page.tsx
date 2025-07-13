import "./login.module.css"
import logo from '/assets/images/logo-dark.svg';
const page = () => {
    return (
        <div className="auth-main">
            <div className="auth-wrapper v3">
                <div className="auth-form">
                    <div className="auth-header">
                        <a href="#"><img src={logo} alt="img" /></a>
                    </div>
                    <div className="card my-5">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-end mb-4">
                                <h3 className="mb-0"><b>Sign up</b></h3>
                                <a href="#" className="link-primary">Already have an account?</a>
                            </div>
                            <div className="row">
                         z       <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="form-label">First Name*</label>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Company</label>
                                <input type="text" className="form-control" placeholder="Company" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Email Address*</label>
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <p className="mt-4 text-sm text-muted">By Signing up, you agree to our <a href="#" className="text-primary"> Terms of Service </a> and <a href="#" className="text-primary"> Privacy Policy</a></p>
                            <div className="d-grid mt-3">
                                <button type="button" className="btn btn-primary">Create Account</button>
                            </div>
                            <div className="saprator mt-3">
                                <span>Sign up with</span>
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
                    <div className="auth-footer row">
                        {/* <!-- <div className=""> --> */}
                        <div className="col my-1">
                            <p className="m-0">Copyright © <a href="#">Codedthemes</a></p>
                        </div>
                        <div className="col-auto my-1">
                            <ul className="list-inline footer-link mb-0">
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