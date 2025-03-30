import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function Assignjob(){
    const [user,setuser]=useState([])
    const [job,setjob]=useState([])
    const [msg,setmsg]=useState(undefined)
    const [userid,setuserid]=useState([])
    const [jobid,setjobid]=useState([])
    useEffect(() => {
        const list = async () => {
            try {
                let header = {
                    'Authorization': 'bearer ' + localStorage.getItem('token')
                }
                let userapi = 'http://localhost:5001/api/user/get'
                const responce = await axios.get(userapi, { headers: header })
                setuser(responce.data)
                // console.log(responce)
            }
            catch (error) {
                console.log(error);
            }
        }
        const job = async () => {
            try {
                let header = {
                    'Authorization': 'bearer ' + localStorage.getItem('token')
                }
                let userapi = 'http://localhost:5001/api/jobs/get'
                const responce = await axios.get(userapi, { headers: header })
                setjob(responce.data)
                // console.log(responce)
            }
            catch (error) {
                console.log(error);
            }
        }
        list();
        job();
    }, []) 
    const assign=async($event)=>{
        try{
            $event.preventDefault();
            console.log('hello')
            let assignapi='http://localhost:5001/api/application/add'
            let responce=await axios.post(assignapi,{
                'jid':jobid,
                'uid':userid
            })
            setmsg('application added')

        }
        catch(err){
            setmsg('Error in Assignjob')
        }
    }
    return(
        <div>
            <div className="row">
                <div className="col-sm-4-md-12">
                    <AdminNavbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4-md-12">
                    <div className="card">
                        <div className="card-header">
                            Assign Job to User :
                        </div>
                        <div className="card-body">
                            <form onSubmit={assign}>
                                {msg ? <div className="col-md-12">
                                    <div className="alert alert-primary">
                                        {msg}
                                    </div>
                                </div> : ''}
                                <div className="mt-4">
                                    <label>Users List :</label>
                                    <select className="form-control"
                                        onChange={($event) => setuserid($event.target.value)}>
                                        <option> Select the User</option>
                                        {
                                            user.map((u, index) => (
                                                <option key={index} value={u._id}
                                                >{u.username}</option>
                                            ))

                                        }
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <label>Users List :</label>
                                    <select className="form-control"
                                        onChange={($event) => setjobid($event.target.value)}>
                                        <option> Select the Job</option>
                                        {
                                            job.map((u, index) => (
                                                <option key={index} value={u._id}
                                                >{u.title}</option>
                                            ))

                                        }
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="btn btn-primary">Assign job</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Assignjob;