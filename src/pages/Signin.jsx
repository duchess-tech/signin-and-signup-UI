import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DefaultLayout from "../layouts/Defaultlayout";
import { AxiosError } from "axios"
import http from "../http";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'





function Signin() {

    const [loading, setLoading] = useState(false)   //loading data
    const username = useRef();                      //equivalent to document.getElementBy id
    const password = useRef(null);                   //password storage
    const email = useRef(null);                   //password storage
    const navigate = useNavigate()                   //React navigation

    const onLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            let data = {
                username: username.current.value,
                email: email.current.value,                //values from the input
                password: password.current.value
            }
            const response = await http.post("/login", data)
            console.log(response)
            localStorage.setItem('access_token', response.data.token)
            console.log("successfull")

            setTimeout(() => {
                navigate('/Signup')
            }, 1000)
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response.status == 401) {
                    navigate("/Signup")
                    console.log("Login failed")
                    return
                }
            }
            // navigate('/Signup')
        } finally {
            setLoading(false)
        }
    }
    return (
        <main>

            <DefaultLayout>
                <div className="form-design-div">
                    <form className="form-design1" onSubmit={onLogin} >

                        <div className="text-div">
                            <h1 className="myanni">WELCOME BACK!</h1>
                            <p className="">Please enter your details.</p>
                        </div>

                        <div className="input-div">
                            <input ref={username} className="btn3" name="UserName"
                                type="text" placeholder="Username" />

                            <input ref={email} className="btn3" name="email" type="email" placeholder="Email" />


                            <input ref={password} className="btn3 " type="password" placeholder="Password" />


                            <div className="sp">
                                <div> <input type="checkbox" /> <span className="label-text">Remember me</span> </div>
                                <div className="p sp-p"><p className="label-text">Forgot Password</p></div>
                            </div>
                            <button className="btn1" type="submit" id="submit" >
                                <span hidden={!loading} className="spinner-border spinner-border-sm"></span>
                                <span> Sign in</span></button>
                            <button className="btn2" ><span className="label-text fa"><FontAwesomeIcon icon={faGoogle} color="red" /></span><span className="google-text">Sign in with Google</span>
                            </button>
                        </div>
                        <p className="link-p">
                            <span className="link-text"> Don't have an account?</span> <Link to="/Signup" className="navbtn signup-link" > Signup here.</Link>
                        </p>


                    </form> </div>
            </DefaultLayout>
        </main>
    )


}
export default Signin