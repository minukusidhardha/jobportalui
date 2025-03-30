import { useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function UserOnboard(){
    const [name,setname]=useState(0);
    const [city,setcity]=useState(0);
    const [username,setusername]=useState(0);
    const [password,setpassword]=useState(0);
    const [msg,setmsg]=useState(0);
    
    const Processonboard=async($event)=>{
        try{
            $event.preventDefault();
            let userapi='http://localhost:5001/api/user/add'
            let responce=await axios.post(userapi,{
                'name':name,
                'city':city,
                'username':username,
                'password':password
            })
            setmsg('user Onboarded!!!!')

        }
        catch(error){
            setmsg('something wrong!!!')
        }

    }
    return(
        <div>
            <div className="row">
                <div className="col-sm-4-mt-4">
                    <AdminNavbar />
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    User ONboard
                </div>
                <div className="card-body">
                    <form className="row g-3" onSubmit={Processonboard}>
                        {msg? <div className="col-md-12">
                            <div className="alert alert-primary">
                                {msg}
                            </div>
                        </div>:''}
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control"
                                onChange={(($event) => setname($event.target.value))}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control"
                                onChange={(($event) => setcity($event.target.value))}
                            />
                        </div>
                       
                        <div className="col-lg-12">
                            <label htmlFor="inputCity" className="form-label">Profile Pic</label>
                            <input type="file" className="form-control" id="inputCity" />
                            <br />
                            <button className="btn btn-secondary">Upload</button>
                        </div>
                        <div className="col-lg-12">
                            <label htmlFor="inputCity" className="form-label">Upload updated CV</label>
                            <input type="file" className="form-control" id="inputCity" />
                            <br />
                            <button className="btn btn-secondary">Upload</button>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputZip" className="form-label">Username</label>
                            <input type="text" className="form-control" id="inputZip"
                                onChange={(($event) => setusername($event.target.value))}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputZip" className="form-label">Password</label>
                            <input type="text" className="form-control" id="inputZip"
                                onChange={(($event) => setpassword($event.target.value))}
                            />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" disabled={!name || !city || !username || !password}>Employee Onboarding</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default UserOnboard;