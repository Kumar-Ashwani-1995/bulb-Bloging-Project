import React, { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from '../../redux/action.type'

export default function SignUpForm(props) {
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [cnfPasswordShown, setCnfPasswordShown] = useState(false);
    async function signUpUserToDB (user) {
        try {
            const signupUser = `${BASE_URL}/user`;

            let response = await fetch(signupUser, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(user)
            });
            let data = await response.json();
            if(data.email===user.email){

                return "success"
            }else{
                return "failure"
            }
        } catch (error) {
            console.log(error);
            return "failure"
        }
    }
    const togglePassword = (type) => {
        if (type === "password") {
            setPasswordShown(!passwordShown);
        }
        else {
            setCnfPasswordShown(!cnfPasswordShown);
        }
    };
    let formik = useFormik({
        initialValues: {
            email: "",
            fullName:"",
            password: "",
            cnfpassword: "",
        },
        onSubmit: async function (value) {
            console.log({email:value.email,fullName:value.fullName,password:value.password});
            let status = await signUpUserToDB({email:value.email,fullName:value.fullName,password:value.password})
            if(status==="success"){
            formik.resetForm();
            props.backToLogin();
            }else{
                setErrorMessage("Sorry. Something went wrong!")
            }
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Not a proper email").required("Email is required"),
            fullName:Yup.string().required("Name is required").test('is-full-name',"Please enter First and last name both",(value)=>{
                if(!value){
                    return false
                }
                let lenghtOfName = value.split(" ");
                return lenghtOfName.length>=2;
            }),
            cnfpassword:Yup.string().required("Confirm Password is required")
            .oneOf([Yup.ref('password'),null],'Confirm Password didnt not match'),
            password: Yup.string().required("password is required")
            // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'must contain 8 char, one uppercase, one lowercase,one number, one special character'),
            

        })
    })

    return (
        <form className='m-2 mt-10 w-64' onSubmit={formik.handleSubmit}>
            <div className='flex flex-col'>
                <label className='text-xs  mt-3'>User Email</label>
                <span className='relative items-end'>
                <FiMail className='absolute text-xl top-2 right-0 font-light text-gray-400'></FiMail>
                </span>
                <input data-testid="email" className={`border-b-2 bg-white outline-none placeholder:text-xs py-1  pr-7 ${formik.touched.email && formik.errors.email ? "border-red-300" : 'border-gray-300'}`}
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder={" Type your User Email"}></input>
                {formik.touched.email && formik.errors.email && (<span className='text-red-500 text-xs'>{formik.errors.email}</span>)}

            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-xs  mt-3'>Full Name</label>
                <span className='relative items-end'>
                <BsPersonCircle className='absolute text-xl top-2 right-0 font-light text-gray-400'></BsPersonCircle>
                </span>
                <input data-testid="fullname" className={`border-b-2 bg-white outline-none placeholder:text-xs py-1  pr-7 ${formik.touched.fullName && formik.errors.fullName ? "border-red-300" : 'border-gray-300'}`}
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                placeholder={" Type your User Full Name"}></input>
                {formik.touched.fullName && formik.errors.fullName && (<span className='text-red-500 text-xs'>{formik.errors.fullName}</span>)}

            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-xs mt-3'>Password</label>
                <span className='relative items-end' data-testid="toggle" onClick={() => { togglePassword("password") }}>
                    {passwordShown ?
                        <AiFillEyeInvisible className='absolute text-xl top-2  right-0 font-light text-gray-400'></AiFillEyeInvisible> :
                        <AiFillEye className='absolute text-xl top-2  right-0 font-light text-gray-400'></AiFillEye>}

                </span>
                <input data-testid="password" className={`border-b-2 outline-none placeholder:text-xs py-1 pr-7  ${formik.touched.password && formik.errors.password ? "border-red-300" : 'border-gray-300'}`}
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                type={passwordShown ? "text" : "password"} placeholder={" Type your password"}></input>
                {formik.touched.password && formik.errors.password && (<span className='text-red-500 text-xs'>{formik.errors.password}</span>)}

            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-xs  mt-3'>Confirm Password</label>
                <span className='relative items-end' data-testid="cnftoggle" onClick={() => { togglePassword("cnfPassword") }}>
                    {cnfPasswordShown ?
                        <AiFillEyeInvisible className='absolute text-xl top-2  right-0 font-light text-gray-400'></AiFillEyeInvisible> :
                        <AiFillEye className='absolute text-xl top-2  right-0 font-light text-gray-400'></AiFillEye>}

                </span>
                <input data-testid="cnfpassword" className={`border-b-2 outline-none placeholder:text-xs py-1 pr-7  ${formik.touched.cnfpassword && formik.errors.cnfpassword ? "border-red-300" : 'border-gray-300'}`}
                 name="cnfpassword"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.cnfpassword}
                type={cnfPasswordShown ? "text" : "password"} placeholder={" Retype your password"}></input>
                {formik.touched.cnfpassword && formik.errors.cnfpassword && (<span className='text-red-500 text-xs'>{formik.errors.cnfpassword}</span>)}

            </div>
            <div className='flex justify-center mt-10'>
                <button data-testid="submit"  className='border w-full rounded-3xl font-bold p-1' type='submit' style={{ background: "#FFC017" }}>Sign up</button>
            </div>
            <div>
                <p className='text-red-600 text-sm text-center mt-5'>{errorMessage}</p>
            </div>
        </form>
    )
}
