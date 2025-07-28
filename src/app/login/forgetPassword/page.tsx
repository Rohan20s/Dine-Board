'use client';

import { forgotPasswordTexts } from '@/app/login/forgetPassword/forgetPassword.constants';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ThemeToggle } from '@/components/theme_toggle';

const ForgetPasswordPage = () => {
    const router = useRouter();

    const handleLoginRedirect = () => {
        router.push('/login');
    };

    // Validation schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
    });

    // Initial form values
    const initialValues = {
        email: '',
    };

    // Submit handler
    const onSubmit = (values: typeof initialValues) => {
        console.log('Forgot Password Form Submitted:', values);
        // handle password reset logic (e.g., API call)
    };

    return (
        <div className="bg-gray-100 min-h-screen dark:bg-neutral-800  text-gray-800 dark:text-gray-200 flex flex-col justify-center  transition-all duration-300">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => (
                    <>
                        <div className="py-2 flex justify-center ">
                            <a href="#"><img src="/assets/images/logo-dark.svg" alt="logo" /></a>
                        </div>
                        <Form>
                            <div className="max-w-lg mx-auto my-5 w-full bg-white rounded-lg shadow-md dark:bg-neutral-900 dark:text-white ">
                                <div className="p-8">
                                    <div className="flex justify-between items-end mb-4">
                                        <h3 className="mb-0 text-2xl font-bold">{forgotPasswordTexts.title}</h3>
                                        <a
                                            href="#"
                                            onClick={handleLoginRedirect}
                                            className="text-blue-600 hover:underline text-sm"
                                        >
                                            {forgotPasswordTexts.backToLogin}
                                        </a>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="block mb-1 font-medium">{forgotPasswordTexts.emailLabel}</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder={forgotPasswordTexts.emailPlaceholder}
                                            className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${formik.touched.email && formik.errors.email
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                                }`}
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-800 font-semibold transition"
                                        >
                                            Send Reset Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
            <div className="flex justify-center mt-4">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default ForgetPasswordPage;
