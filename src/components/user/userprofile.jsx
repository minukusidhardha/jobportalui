import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Usernavbar from "./usernavbar"

function Userprofile(){
    const [employee, setemployee] = useState([])
    const [file,setfile]=useState([])
    const [profile,setprofile]=useState([])
    useEffect(() => {
        const employee = async () => {
            try {
                let header = {
                    'Authorization': 'bearer ' + localStorage.getItem('token')
                }
                let empapi = 'https://job-portal-4xtg.onrender.com/api/user/getone'
                let responce = await axios.get(empapi, { headers: header })
                setemployee(responce.data)
            }
            catch (err) {
                console.log(err);
            }


        }
        employee();
    }, [])
    const handleprofile=($event)=>{
         setprofile($event.target.files[0]);
    }
    const Uploadprofile=async()=>{
        try{
            if(!profile){
                // console.log('file not found')
                toast.error('file not found');
            }
            let fdata=new FormData();
            fdata.append('file',profile);
            let header={
                'Authorization':'Bearer '+localStorage.getItem('token'),
                'Content-Type':'multipart/form-data'
            }
            let profileapi='https://job-portal-4xtg.onrender.com/api/user/profile'
            let responce=await axios.put(profileapi,fdata,{headers:header})
            // console.log(responce);
            toast.success('profile added');

        }
        catch(err){
            console.log(err);
        }

    }
    const handelfilechange=($event)=>{
        setfile($event.target.files[0]);
    }
    const resume=async()=>{
        try{
            if(!file){
                // console.log('file not found')
                toast.error('file not found');
            }
            let fdata=new FormData();
            fdata.append('file',file);
            let header={
                'Authorization':'Bearer '+localStorage.getItem('token'),
                'Content-Type':'multipart/form-data'
            }
            let cvapi='https://job-portal-4xtg.onrender.com/api/user/cv'
            let responce=await axios.put(cvapi,fdata,{headers:header})
            // console.log(responce);
            toast.success('resume added');

        }
        catch(err){
            console.log(err);
        }

    }
    return (
        <div>
            <div className="row">
                <Usernavbar/>
            </div>
        <div className="card">
            <div className="card-header">
                Employee Profile
            </div>
            <div className="card-body">
                <form className="row g-3" >
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                        value={employee.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control"
                        value={employee.city}
                        />
                    </div>
                
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control"
                        value={employee.username}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"
                        disabled={true}
                        />
                    </div>
                    </form>
                    <div className="col-lg-12">
                            <label className="form-label">Profile Pic</label>
                            <input type="file" className="form-control" onChange={handleprofile}
                            />
                            <br />
                            <button className="btn btn-secondary" onClick={Uploadprofile} >Upload</button>
                        </div>
                    <hr />
                    <div className="col-lg-12">
                        <label className="form-label">Upload updated CV</label>
                        <input type="file" className="form-control"onChange={handelfilechange}  />
                        <br />
                        <button className="btn btn-secondary" onClick={resume}>Upload</button>
                    </div>
                    <hr />
        
                
            </div>
        </div>
        </div>
    )

}
export default Userprofile;