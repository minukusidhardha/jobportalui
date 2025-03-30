import { NavLink } from "react-router";
// import './Usernav.css'
function Usernavbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink to='/user/dashboard' style={{'textDecoration':'none'}}>
                            <li className="nav-item">
                                <div className="nav-link active"  href="#">Home</div>
                            </li>
                            </NavLink>
                            <NavLink to='/user/assigned-job' style={{'textDecoration':'none'}}>
                                <li className="nav-item">
                                    <div className="nav-link" href="#">Assigned Job</div>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                    <NavLink to='/userprofile' style={{'textDecoration': 'none'}}>
                    <li className="nav-item">
                            <div className="nav-link" href='#'>Profile</div>
                    </li>
                </NavLink>
                </ul>

                </div>
                
            </nav>

        </div>
    )

}
export default Usernavbar;