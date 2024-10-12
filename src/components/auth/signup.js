import React from "react";
import { useState } from "react";
import { addUser } from "../../UserReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



function SignUp() {


    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cpassword, setCpassword] = useState()
    const [msg, setMsg] = useState()

    console.log(email)
    console.log(password)
    console.log(cpassword)
    
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== cpassword) {
            setMsg('password do not match')

        }
        else {

            dispatch(addUser({ id: users[users.length - 1].id + 1, email, password }))
            navigate('/login')
        }

    }

 




    return (
        <div>

            <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>



                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        {/* first input */}
                                                        <input type="email" id="form3Example3c" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        {/* second input */}
                                                        <input type="password" id="form3Example4c" className="form-control" onChange={e => setPassword(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        {/* third input */}
                                                        <input type="password" id="form3Example4cd" className="form-control" onChange={e => setCpassword(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example4cd">confirmpassword</label>
                                                    </div>
                                                </div>



                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" >Register</button>
                                                </div>

                                            </form>
                                            <div style={{textAlign:'center'}} >
                                                <a href="login/"  style={{textDecoration:'none'}}>login</a>
                                            </div>



                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SignUp;