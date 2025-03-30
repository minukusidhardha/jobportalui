import Usernavbar from "./usernavbar";
import './Dashboard.css'
function UserDashboard(){
    return(
        <div>
    <div className="row">
        <div className="col-sm-4-md-12">
            <Usernavbar/>
        </div>
            </div>
            <div className="background">
            <div className="dashboard-container">
            <div className="row">
                <div className="welcome-section">
                    <h1>Welcome User</h1>
                    <p>Thank you for visiting our Page,Have a good day </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )

}
export default UserDashboard;