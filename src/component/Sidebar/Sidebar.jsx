import './Sidebar.css'
import { NavLink } from "react-router-dom";
export function Sidebar() {
    

  return (
    <>
      <div className='sidebar-left'>
        <NavLink to='/' >
          <i class="fa fa-home" aria-hidden="true"></i>Home
        </NavLink>
        <NavLink to='/explore' >
        <i class="fa fa-rocket" aria-hidden="true"></i>Explore
        </NavLink>
        <NavLink to='/bookmark' >
        <i class="fa fa-bookmark" aria-hidden="true"></i>Bookmark
        </NavLink>
        <NavLink to='/profile'>
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>Profile
        </NavLink>
      </div>
    </>
  );
  }