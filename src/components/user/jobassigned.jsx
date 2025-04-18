import { useEffect, useState } from "react";
import Usernavbar from "./usernavbar";
import axios from "axios";

function JobAssigned(){
    const [job,setjob]=useState([])

    useEffect(()=>{
      const enterjob=async()=>{
        try{
         let jobapi='https://job-portal-4xtg.onrender.com/api/application/get'
         const header={
            'Authorization':'bearer '+localStorage.getItem('token')
         }
         const responce=await axios.get(jobapi,{headers:header});
         setjob(responce.data)
         console.log(responce.data)

        }
        catch(err){
            console.log(err)
        }
      }
      enterjob()
    },[])
    return(
        <>
        <div className="row">
            <div className="col-sm-4-md-12">
                <Usernavbar/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4-md-12">
                <div className="card">{
                    job.map((j,index)=>(
                    <div key={index}>
                        <div className="card-header"><h3>{j.title}</h3></div>
                        <div className="card-body">
                        <h4>Tech Stack : {j.techstack}</h4>
                        <h4>Tech Stack : {j.shortdec}</h4>
                        <h4>Tech Stack : {j.salary}</h4>
                        <h4>Tech Stack : {j.experience}</h4>
                        </div>
                    </div>
                    ))
                    }
                </div>
            </div>
        </div>
        </>
    )

}
export default JobAssigned;