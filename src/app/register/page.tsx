'use client';
import styles from '../register/register.module.css';
import { useRouter } from 'next/navigation';
import { registerTexts } from './register.constants';

const RegisterPage = () => {
    const router = useRouter();
    const handleLoginRedirect = () => {
        router.push('/login');
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
                                <h3 className={styles.title}><b>{registerTexts.title}</b></h3>
                                <a href="#" onClick={handleLoginRedirect} className={styles.linkPrimary}>{registerTexts.alreadyHaveAccount}</a>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.colMd6}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>{registerTexts.firstName}</label>
                                        <input type="text" className={styles.formControl} placeholder="First Name" />
                                    </div>
                                </div>
                                <div className={styles.colMd6}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>{registerTexts.lastName}</label>
                                        <input type="text" className={styles.formControl} placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>{registerTexts.Orgnazation}</label>
                                <input type="text" className={styles.formControl} placeholder="Orgnazation" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>{registerTexts.email}</label>
                                <input type="email" className={styles.formControl} placeholder="Email Address" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>{registerTexts.password}</label>
                                <input type="password" className={styles.formControl} placeholder="Password" />
                            </div>
                            <div className={styles.formCheck}>
                                <input className={styles.formCheckInput} type="checkbox" value="" id="flexCheckDefault" />
                                <label className={styles.formCheckLabel} htmlFor="flexCheckDefault">
                                    <p className={styles.termsText}>By Signing up, you agree to our <a href="#" className={styles.linkPrimary}> Terms of Service </a> and <a href="#" className={styles.linkPrimary}> Privacy Policy</a></p>
                                </label>
                            </div>
                            <div className={styles.buttonRow}>
                                <button type="button" className={styles.btnBrand}>{registerTexts.CreateAccount}</button>
                            </div>
                            <div className={styles.saprator}>
                                <span>{registerTexts.sighUpWith}</span>
                            </div>
                            <div className={styles.socialRow}>
                                <button type="button" className={styles.btnGoogle}>
                                    <img src="/assets/images/authentication/google.svg" alt="img" /> <span className={styles.googleText}>{registerTexts.google}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.authFooter}>
                        <div className={styles.footerCol}>
                            <p className={styles.footerText}>Copyright © <a href="#">Codedthemes</a></p>
                        </div>
                        <div className={styles.footerColAuto}>
                            <ul className={styles.footerLinks}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;