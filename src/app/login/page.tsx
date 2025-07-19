'use client';

import styles from '@/app/login/login.module.scss';
import { loginTexts } from '@/app/login/login.constants';
import { useRouter } from 'next/navigation';


const page = () => {

    const router = useRouter();
    const handleLoginRedirect = () => {
        router.push('/register');
    };

    return (
        <div className="auth-main bg-light min-vh-100">
            <div  className=" container">
                <div className="auth-form ">
                    <div className="auth-header py-2">
                        <a href="#"><img src="/assets/images/logo-dark.svg" alt="img" /></a>
                    </div>
                    <div className={`${ styles.maxWidth } card my-5 auth-wrapper v3 container  mx-auto w-100`}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-end mb-4">
                                <h3 className="mb-0"><b>{loginTexts.title}</b></h3>
                                <a href="#" onClick={handleLoginRedirect} className="link-primary">{loginTexts.notHaveAccount}</a>
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">{loginTexts.email}</label>
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">{loginTexts.password}</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="d-flex mt-1 justify-content-end">
                                
                                <h6 className="text-primary f-w-400">{loginTexts.forgotPassword}</h6>
                            </div>
                            <div className="d-grid mt-4">
                                <button type="button" className="btn btn-brand">{loginTexts.login}</button>
                            </div>
                            <div className="saprator mt-3 text-center">
                                <span>{loginTexts.loginWith}</span>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="d-grid">
                                        <button type="button" className="btn mt-2 btn-light-primary bg-light text-muted btn-brand">
                                            <img src="/assets/images/authentication/google.svg" alt="img" /> <span className="d-none d-sm-inline-block">{loginTexts.google}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;