import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function GetallJobs(){
    const [job,setjob]=useState([])
    useEffect(()=>{
        const jobproject=async()=>{
        let alljobsapi='https://job-portal-4xtg.onrender.com/api/jobs/get'
        let responce=await axios.get(alljobsapi)
        setjob(responce.data)
        }
        jobproject();
    },[])
    return(
        <div>
            <div className="row">
                <div className="col-sm-4-md-12">
                    <AdminNavbar/>
                </div>
            </div>
            <div className="card">
                <div className="col-sm-4-mt-4">
                {
                    job.map((j,index)=>(
                        <div key={index} className="col-mt-4">
                            <div className="card-header"><strong>Job Title:-   {j.title}</strong></div>
                            <div className="card-body">
                                <h5>Short Dec:-   {j.shortdec}</h5>
                                <h5>Experience:-   {j.experience}</h5>
                                <h5>TechStack:-   {j.techstack}</h5>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">View Full Details</button>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>

        </div>
    )

}
export default GetallJobs;