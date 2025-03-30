import { useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function Addjobs(){
    const [title,settitle]=useState(undefined)
    const [shortdec,setshortdec]=useState(undefined)
    const [salary,setsalary]=useState(undefined)
    const [experience,setexperience]=useState(undefined)
    const [techstack,settechstack]=useState(undefined)
    const [msg,setmsg]=useState(undefined)

    const ProcessAddjob=async()=>{
        try{
            let addjobapi='http://localhost:5001/api/jobs/add'
            let responce=await axios.post(addjobapi,)

        }
        catch(err){
            setmsg('error in adding job!!!')
            console.log(err);
        }

    }
    return(
        <div>
            <div className="row">
                <div className="col-sm-4-lg-12">
                    <AdminNavbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4-mb-12">
                    <div className="card">
                        <div className="card-header">
                            <strong>Add Jobs </strong>
                        </div>
                        <div className="card-body">
                            <form className="row g-3" onSubmit={ProcessAddjob}>
                                {msg ? <div className="col-md-12">
                                    <div className="alert alert-primary">
                                        {msg}
                                    </div>
                                </div> : ''}
                                <div className="col-md-12">
                                    <label className="form-label">title</label>
                                    <input type="text" className="form-control"
                                        onChange={(($event) => settitle($event.target.value))}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">shortdec</label>
                                    <input type="text" className="form-control"
                                        onChange={(($event) => setshortdec($event.target.value))}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputZip" className="form-label">salary</label>
                                    <input type="text" className="form-control" id="inputZip"
                                        onChange={(($event) => setsalary($event.target.value))}
                                    />
                                </div>

                                
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">experience</label>
                                    <input type="text" className="form-control" id="inputZip"
                                        onChange={(($event) => setexperience($event.target.value))}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputZip" className="form-label">techstack</label>
                                    <input type="text" className="form-control" id="inputZip"
                                        onChange={(($event) => settechstack($event.target.value))}
                                    />
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Employee Onboarding</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Addjobs;