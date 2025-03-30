import AdminNavbar from "./navbar";
import './Dashboards.css'
function AdminDashboard(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <AdminNavbar/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="dashboard-containers">
                            <div className="welcome-sections">
                                <h1>Welcome Admin</h1>
                                <p>Thank you for visiting our Page,Have a good day </p>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default AdminDashboard;