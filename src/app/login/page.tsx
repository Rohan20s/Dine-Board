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
  const handleForgetRedirect = () => {
    router.push('/login/forgetPassword');
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
    <div className="bg-gray-100 min-h-screen">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <>
              <div className="py-2 flex justify-center">
                <a href="#"><img src="/assets/images/logo-dark.svg" alt="img" /></a>
              </div>
              <Form>
                <div className="max-w-md mx-auto  w-full my-5 bg-white rounded shadow-md">
                  <div className="p-8">
                    <div className="flex justify-between items-end mb-4">
                      <h3 className="mb-0 text-2xl font-bold">{loginTexts.title}</h3>
                      <a
                        href="#"
                        onClick={handleLoginRedirect}
                        className="text-blue-600 hover:underline text-sm text-decoration-none"
                      >
                        {loginTexts.notHaveAccount}
                      </a>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-1 font-medium dark:text-blue-600">{loginTexts.email}</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="block mb-1 font-medium">{loginTexts.password}</label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="flex mt-1 justify-end">
                      <p

                        onClick={handleForgetRedirect}
                        className="text-gray-600 hover:underline text-lg font-medium text-decoration-none cursor-pointer mb-0" >
                        {loginTexts.forgotPassword}
                      </p>
                    </div>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-800 font-semibold transition"
                      >
                        {loginTexts.login}
                      </button>
                    </div>
                    <div className="my-3 text-center">
                      <span className="text-gray-500">{loginTexts.loginWith}</span>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 border border-gray-300"
                      >
                        <img src="/assets/images/authentication/google.svg" alt="img" className="h-5 w-5" />
                        <span className="hidden sm:inline-block">{loginTexts.google}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
    </div>
  );
}

export default LoginPage;