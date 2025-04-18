import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const Forgotpassword=()=>{
    const [username,setusername]=useState(undefined)
    const [password,setpassword]=useState(undefined)
    const [msg,setmsg]=useState()
    const navigate=useNavigate()
    
    const processapi=async($event)=>{
        try{
            $event.preventDefault();
            let authapi='https://job-portal-4xtg.onrender.com/api/auth/setpassword'
            const responce=await axios.post(authapi,{
                'username':username,
                'password':password
            })
            setmsg('password resetted')
            toast('password updated')
            navigate('/')
        }
            catch(err){
               setmsg('something wrong '+err)
            }

    }
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <div className="form-control">
                                <h1 className="mb-4">Reset Password</h1>
                                {msg ? <div className="alert alert-primary">
                                    {msg}
                                </div> : ""}
                                <form onSubmit={processapi}>
                                    <div className=" mb-4">
                                    <label >New Username:</label>
                                    <input className="form-control" type="text"  placeholder="Username"
                                     onChange={($event) => setusername($event.target.value)} 
                                     />
                                    </div>
                                    <div className=" mb-5">
                                    <label >New Password:</label>
                                    <input className="form-control" type="password" placeholder="Password" 
                                     onChange={($event) => setpassword($event.target.value)}
                                      />
                                    </div>
                                    
                                    <div className="mb-2-md-4">
                                        <button type="submit" className="btn btn-primary btn-block btn-large"
                                            disabled={!username || !password}>setpassword</button>
                                    </div>

                                </form>
                            </div>
                </div>
                <div className="col-md-3"></div>
        </div>
    )
}
export default Forgotpassword;