import { NavLink } from "react-router";

function AdminNavbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink to='/admin/dashboard' style={{'textDecoration':'none'}}>
                            <li className="nav-item">
                                <div className="nav-link active"  href="#">Home</div>
                            </li>
                            </NavLink>
                            <NavLink to='/admin/User-onboard' style={{'textDecoration':'none'}}>
                            <li className="nav-item">
                                <div className="nav-link" href="#">UserOnboard</div>
                            </li>
                            </NavLink>
                            <NavLink to='/admin/Userlist'style={{'textDecoration':'none'}}>
                            <li className="nav-item">
                                <div className="nav-link" href="#">All User</div>
                            </li>
                            </NavLink>
                            <NavLink to='/admin/addjobs'style={{'textDecoration':'none'}}>
                            <li className="nav-item">
                                <div className="nav-link" href="#">Add Job</div>
                            </li>
                            </NavLink>
                            <NavLink to='/admin/all-jobs'style={{'textDecoration':'none'}}>
                            <li className="nav-item">
                                <div className="nav-link" href="#">All Jobs</div>
                            </li>
                            </NavLink>
                            <NavLink to='/admin/assingjob' style={{'textDecoration':'none'}}>
                            <li className="nav-item">
                                <div className="nav-link" href="#">Assin JobTo User</div>
                            </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default AdminNavbar;