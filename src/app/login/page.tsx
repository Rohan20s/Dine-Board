'use client';

import styles from '../login/login.module.css';
import { useRouter } from 'next/navigation';
import { loginTexts } from './login.constants';

const LoginPage = () => {
    const router = useRouter();
    const handleLoginRedirect = () => {
        router.push('/register');
    };

    return (
        <div className={styles.authMain}>
            <div className={styles.container}>
                <div className={styles.authForm}>
                    <div className={styles.authHeader}>
                        <a href="#"><img src="/assets/images/logo-dark.svg" alt="img" /></a>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.cardBody}>
                            <div className={styles.headerRow}>
                                <h3 className={styles.title}><b>{loginTexts.title}</b></h3>
                                <a href="#" onClick={handleLoginRedirect} className={styles.linkPrimary}>{loginTexts.notHaveAccount}</a>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>{loginTexts.email}</label>
                                <input type="email" className={styles.formControl} placeholder="Email Address" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>{loginTexts.password}</label>
                                <input type="password" className={styles.formControl} placeholder="Password" />
                            </div>
                            <div className={styles.forgotRow}>
                                <h6 className={styles.forgotText}>{loginTexts.forgotPassword}</h6>
                            </div>
                            <div className={styles.buttonRow}>
                                <button type="button" className={styles.btnBrand}>{loginTexts.login}</button>
                            </div>
                            <div className={styles.saprator}>
                                <span>{loginTexts.loginWith}</span> 
                            </div>
                            <div className={styles.socialRow}>
                                <button type="button" className={styles.btnGoogle}>
                                    <img src="/assets/images/authentication/google.svg" alt="img" /> <span className={styles.googleText}>{loginTexts.google}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;