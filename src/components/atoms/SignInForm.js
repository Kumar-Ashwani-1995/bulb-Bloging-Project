import React, { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginUser } from '../../redux/action/post.action';
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function SignInForm(props) {
    const [passwordShown, setPasswordShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let dispatch = useDispatch();

    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async function (value) {
            console.log(value);
            let loginInStatus = await dispatch(authLoginUser(value.email.toLowerCase(), value.password))
            if (loginInStatus === "success") {
                props.navigateToDashboard()
                formik.resetForm();
            } else {
                setErrorMessage("Invalid Email or password")
            }

        },
        validationSchema: Yup.object({
            email: Yup.string().email("Not a proper email").required("email is required"),
            password: Yup.string().required("password is required")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'must contain 8 char, one uppercase, one lowercase,one number, one special character'),
        })
    })


    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    
    return (
        <form className='m-2 mt-10 w-64 bulb__width_full' onSubmit={formik.handleSubmit}>
            <div className='flex flex-col'>
                {/* <label className='text-xs mb-1 mt-3'>User Email</label> */}
                <span className='relative items-end'>
                    <BsPersonCircle className='absolute text-xl top-4 right-0 font-light text-gray-400'></BsPersonCircle>
                </span>
                <input data-testid="email" className={`border-b-2 bg-white outline-none placeholder:text-xs py-1  pr-7 mt-3 ${formik.touched.email && formik.errors.email ? "border-red-300" : 'border-gray-300'}`}
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder={" Type your User Email"}></input>
                {formik.touched.email && formik.errors.email && (<span className='text-red-500 text-xs'>{formik.errors.email}</span>)}

            </div>
            <div className='flex flex-col mt-1'>
                {/* <label className='text-xs mb-1 mt-3'>Password</label> */}
                <span className='relative items-end ' data-testid="toggle" onClick={togglePassword}>
                    {passwordShown ?
                        <AiFillEyeInvisible className='absolute text-xl top-4  right-0 font-light text-gray-400'></AiFillEyeInvisible> :
                        <AiFillEye className='absolute text-xl top-4  right-0 font-light text-gray-400'></AiFillEye>}

                </span>
                <input  data-testid="password" className={`border-b-2 outline-none placeholder:text-xs py-1 pr-7 mt-3  ${formik.touched.password && formik.errors.password ? "border-red-300" : 'border-gray-300'}`}
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type={passwordShown ? "text" : "password"} placeholder={" Type your password"}></input>
                {formik.touched.password && formik.errors.password && (<span className='text-red-500 text-xs'>{formik.errors.password}</span>)}

            </div>
            <div className='flex justify-center mt-10'>
                <button data-testid="submit" className='border w-full rounded-3xl font-bold p-1' type='submit' style={{ background: "#FFC017" }}>Log in</button>
            </div>
            <div>
                <p data-testid="error" className='text-red-600 text-sm text-center mt-5'>{errorMessage}</p>
            </div>
        </form>
    )
}
