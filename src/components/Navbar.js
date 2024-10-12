import { useDispatch, useSelector } from "react-redux";
import { NavLink ,Link} from "react-router-dom";
import { removeUser } from "../UserReducer";
import { logout } from "../UserReducer";



function Navbar() {


    const user=useSelector((state)=>state.auth.user)
    const dispatch=useDispatch()

    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
            <h4>Medico</h4>
        </div>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                <NavLink to={"/"} className="nav-link">
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={"/create/"} className="nav-link">
                    Create
                </NavLink>
                </li>
                <li>
                    <NavLink ></NavLink>
                </li>
                <li >
                    <p className="pt-2 ">
                    {user?
                    <p >welcome {user}</p>
                :null}
                </p>
                </li>
                  <p className="d-flex m-auto mx-5">
                    {user?
                    <button onClick={()=>{
                        dispatch(removeUser())
                        dispatch(logout())
                        
                        }}>
                        logout
                    </button>:
                    <div className='px-5'>
                    <Link className='btn btn-primary mx-2' to={'/login'}>Login</Link>
                    <Link className='btn btn-success mx-2' to={'signup'}>sinup</Link>
                    </div>
                    }
                </p>
                
               
            </ul>
        </div>
    </nav>;
}

export default Navbar;