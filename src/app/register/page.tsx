'use client';
import '@/styles/components/button.scss';
import { registerTexts } from '@/app/register/register.constants';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

    const handleLoginRedirect = () =>{
        router.push('/login');
    };

    return (
        <div className=" min-vh-100 bg-light ">
            <div className="auth-wrapper v3  container ">
                <div className="auth-form">
                    <div className="auth-header py-2">
                        <a href="#"><img src="/assets/images/logo-dark.svg" alt="img" /></a>
                    </div>
                    <div style={{ maxWidth: '500px' }} className="card my-5 auth-wrapper v3 container  mx-auto w-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-end mb-4">
                                <h3 className="mb-0"><b>{registerTexts.title}</b></h3>
                                <a href="#" onClick={handleLoginRedirect} className="link-primary">{registerTexts.alreadyHaveAccount}</a>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="form-label">{registerTexts.firstName}</label>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="form-label">{registerTexts.lastName}</label>
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">{registerTexts.Orgnazation}</label>
                                <input type="text" className="form-control" placeholder="Orgnazation" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">{registerTexts.email}</label>
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">{registerTexts.password}</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    <p className="">By Signing up, you agree to our <a href="#" className="text-primary"> Terms of Service </a> and <a href="#" className="text-primary"> Privacy Policy</a></p>
                                </label>
                            </div>
                            <div className="d-grid mt-3">
                                <button type="button" className="btn btn-brand">{registerTexts.CreateAccount}</button>
                            </div>
                            <div className="saprator mt-3 text-center">
                                <span>{registerTexts.sighUpWith}</span>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="d-grid">
                                        <button type="button" className="btn mt-2 btn-light-primary bg-light text-muted btn-brand">
                                            <img src="/assets/images/authentication/google.svg" alt="img" /> <span className="d-none d-sm-inline-block">{registerTexts.google}</span>
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