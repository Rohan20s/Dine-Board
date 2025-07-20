'use client';


import styles from '@/app/login/login.module.scss';
import { loginTexts } from '@/app/login/login.constants';
import { useRouter } from 'next/navigation';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {

  const router = useRouter();
  const handleLoginRedirect = () => {
    router.push('/register');
  };


  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password too short')
      .required('Password is required'),
  });

  // Initial values
  const initialValues = {
    email: '',
    password: '',
  };

  // Submit handler
  const onSubmit = (values: typeof initialValues) => {
    console.log('Form Submitted', values);
  };

  return (
    <div className="auth-main bg-light min-vh-100">
      <div className=" container">

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {/* Formik gives you props and helpers */}
          {(formik) => (
            <>
              <div className="py-2">
                <a href="#"><img src="/assets/images/logo-dark.svg" alt="img" /></a>
              </div>
              <Form>
                <div className={`${styles.maxWidth} card my-5 v3 container  mx-auto w-100`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-end mb-4">
                      <h3 className="mb-0"><b>{loginTexts.title}</b></h3>
                      <a href="#" onClick={handleLoginRedirect} className="link-primary">{loginTexts.notHaveAccount}</a>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email">{loginTexts.email}</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                          }`}
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password">{loginTexts.password}</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''
                          }`}
                      />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>
                    <div className="d-flex mt-1 justify-content-end">
                      <h6 className="text-primary f-w-400">{loginTexts.forgotPassword}</h6>
                    </div>
                    <div className="d-grid mt-4">
                      <button type="button" className="btn btn-brand">{loginTexts.login}</button>
                    </div>
                    <div className="mt-3 text-center">
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
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div >
  );
}


export default LoginPage;