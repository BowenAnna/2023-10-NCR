import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {

function handleLogOut(){
    usersService.logOut()
        //update state to null 
        setUser(null)
}

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; |&nbsp;
      <Link to="/orders/new">New Order</Link>
      {/* <p>
        Welcome, {user.name}
      </p> */}
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
