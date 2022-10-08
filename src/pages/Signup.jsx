
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DefaultLayout from "../layouts/Defaultlayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import http from "../http";

function Signup() {
    const [loading, setloading] = useState(false)
    const [username, setusername] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passErr, setPassErr] = useState('')
    const [error, seterror] = useState("");
    const navigate = useNavigate();
    const input = useRef()
    // const [data, setData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    // });


    const generateError = (err) => {
        toast.error(err, { position: toast.POSITION.TOP_RIGHT })
    };


    // const handleChange = ({ currentTarget: input }) => {
    //     setData({ ...data, [input.name]: input.value });
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newdata = {
            email: email,
            password: password,
            username: username,
            firstname: firstname,
            lastname: lastname,
            username: username
        }
        try {
            const data = await http.post("/Signup", newdata)
            console.log(data);
            localStorage.setItem("thedata", data)


        } catch (error) {
            console.log('you have an error')
        } finally {
            setloading(false)
        }

    };

    return (
        <main>
            <DefaultLayout>
                <div className="form-design-div">

                    <form className="form-design2" onSubmit={handleSubmit}>
                        <div className="text-div">
                            <h1 className="myanni">WELCOME</h1>
                            <p>Welcome ! Please create a new account here.</p>
                        </div>
                        <div className="input-div">
                            <input className="btn3" defaultValue="" name="firstName"
                                type="text" placeholder="First Name" onChange={e => setfirstname(e.target.value)}
                                value={firstname} />

                            <input className="btn3" name="lastName"
                                type="text" placeholder="Last Name" onChange={e => setlastname(e.target.value)}
                                value={lastname} />

                            <input className="btn3" name="UserName"
                                type="text" placeholder="UserName" onChange={e => setusername(e.target.value)}
                                value={username} />

                            <input className="btn3" name="email" type="email" placeholder="Email" onChange={e => setemail(e.target.value)}
                                value={email} />

                            <input className="btn3" name="password"
                                type="password" placeholder="Password" onChange={e => setpassword(e.target.value)}
                                value={password} />



                            <input className="btn3" name="confirmPassword"
                                type="password" placeholder="Confirm password" />
                        </div>



                        <button className="myButton label-text" type="sumbit" id="submit" >
                            <span hidden={!loading} className="spinner-border spinner-border-sm"></span> Create account</button>

                        <p className="link-p" ><span className="link-text">Already have an account?</span> <Link to="/Signin" className="navbtn signup-link"  > please Sign in here!</Link>
                        </p >

                    </form> </div>
            </DefaultLayout>



        </main>
    )
}
export default Signup