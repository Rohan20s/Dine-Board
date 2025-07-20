'use client';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from '@/app/register/register.module.scss';
import { registerTexts } from '@/app/register/register.constants';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  organization: Yup.string().required('Organization is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Min 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .required('password confirmation is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

const Page = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  // Initial values
  const initialValues = {
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  // Submit handler
  const onSubmit = (values: typeof initialValues) => {
    console.log('Form Submitted', values);
  };

  return (
    <div className="container min-vh-100">
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <>
            <Form>
              <div className=" py-2">
                <a href="#"><img src="/assets/images/logo-dark.svg" alt="img" /></a>
              </div>
              <div className={`card my-5  v3 container mx-auto w-100 ${styles.maxWidth}`}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-end mb-4">
                    <h3 className="mb-0"><b>{registerTexts.title}</b></h3>
                    <a href="#" onClick={handleLoginRedirect} className="link-primary">
                      {registerTexts.alreadyHaveAccount}
                    </a>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor='firstName' className="form-label">{registerTexts.firstName}</label>
                        <Field name="firstName" id="firstName" placeholder="First Name" className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''
                          }`} />
                        <ErrorMessage name="firstName" component="div" className="text-danger" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label htmlFor='lastName' className="form-label">{registerTexts.lastName}</label>
                        <Field name="lastName" id="lastName" placeholder="Last Name" className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''
                          }`} />
                        <ErrorMessage name="lastName" component="div" className="text-danger" />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor='organization' className="form-label">{registerTexts.Orgnazation}</label>
                    <Field name="organization" id="organization" placeholder="Organization" className={`form-control ${formik.touched.organization && formik.errors.organization ? 'is-invalid' : ''
                      }`} />
                    <ErrorMessage name="organization" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor='email' className="form-label">{registerTexts.email}</label>
                    <Field name="email" id="email" type="email" placeholder="Email Address" className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor='password' className="form-label">{registerTexts.password}</label>
                    <Field name="password" id="password" type="password" placeholder="Password" className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`} />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'is-invalid' : ''}`}
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                  </div>


                  <div className="form-check">
                    <Field name="acceptTerms" type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="acceptTerms">
                      By Signing up, you agree to our <a className="text-primary">Terms of Service</a> and <a className="text-primary">Privacy Policy</a>
                    </label>
                    <ErrorMessage name="acceptTerms" component="div" className="text-danger" />
                  </div>

                  <div className="d-grid mt-3">
                    <button type="submit" className="btn btn-brand">{registerTexts.CreateAccount}</button>
                  </div>

                  <div className="saprator mt-3 text-center">
                    <span>{registerTexts.sighUpWith}</span>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="d-grid">
                        <button type="button" className="btn mt-2 btn-light-primary bg-light text-muted btn-brand">
                          <img src="/assets/images/authentication/google.svg" alt="img" />
                          <span className="d-none d-sm-inline-block">{registerTexts.google}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Page;
