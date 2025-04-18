import axios from "axios";
import { useState } from "react";
import './Login.css'
import { isRouteErrorResponse, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
function Login(){
    const [username,setusername]=useState()
   const [password,setpassword]=useState()
   const [msg,setmsg]=useState()
   const navigate=useNavigate();

   const processapi= async($event)=>{
    let responce
    try{
        $event.preventDefault();
        let authapi='https://job-portal-4xtg.onrender.com/api/auth/login'
         responce=await axios.post(authapi,{
            'username':username,
            'password':password
        })
        setmsg('Loging in')
    }
        catch(responce){
            if(responce.status===400){
                toast.error('Invalid Credencials')
                setmsg('invalid credencials')
                }
        }
        let role=responce.data.role
        localStorage.setItem('token',responce.data.token)
        switch (role) {
            case 'Admin_Role':
                navigate('/admin/dashboard')
                break;
            case 'User_Role':
                navigate('/user/dashboard')
                break;
            default:
                break;
        }
        return

   }
   
    return(
        <div>
            <div className="row" style={{marginTop:'10%'}}>
                <div className="col-sm-3"></div>
                <div className="col-sm-5">
                    <div className="card">
                        <div className="card-body">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
                            <div className="login">
                                <h1 className="mb-2">Login</h1>
                                {msg ? <div className="alert alert-primary">
                                    {msg}
                                </div> : ""}
                                <form onSubmit={processapi} className="form-card">
                                    <div>
                                        <label>Username:</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Username"
                                            onChange={($event) => setusername($event.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label>Password:</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                            onChange={($event) => setpassword($event.target.value)}
                                        />
                                    </div>

                                    <NavLink to='/forgot'>
                                        <div className="text-muted">Forgot password?</div>
                                    </NavLink>

                                    <div className="mb-2-md-4">
                                        <button type="submit" className="btn btn-primary btn-block btn-large" disabled={!username || !password}>
                                            Login
                                        </button>
                                    </div>
                                    <div id="errorMessage" style={{ color: 'red' }}></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
            <div className="row mb-4">

            </div>
        </div>
    )

}
export default Login;