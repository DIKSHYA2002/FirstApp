import React from 'react'
import '../css/navbar.css'
import {BiSearch} from 'react-icons/bi'
import {MdExplore} from 'react-icons/md'
import {LuFileVideo} from 'react-icons/lu'
import {AiFillMessage} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineAddBox} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {AiFillHome} from 'react-icons/ai';
function Navbar() {
  return (
    <>
      <div className="navbar">
        
        <div className="nav-items">
        <div className="logo">
          <img src="https://th.bing.com/th/id/OIP.vDOq6L5PbY7XrDGK5TjNLAHaC7?pid=ImgDet&rs=1" alt="" />     
        </div>
          <ul>
            <li><span className="icon"><AiFillHome/></span>Home</li>
            <li><span className="icon"><BiSearch/></span>Search</li>
            <li><span className="icon"><MdExplore/></span>Explore</li>
            <li><span className="icon"><LuFileVideo/></span>Reels</li>
            <li><span className='icon'><AiFillMessage/></span>Messages</li>
            <li><span className='icon'><AiOutlineHeart/></span>Notification</li>
            <li><span className='icon'><MdOutlineAddBox/></span>Create</li>
            <li><span className="icon"><CgProfile/></span>Profile</li>
          </ul>
        </div>

        <div className="last">
          More
        </div>
      </div>
    </>

  )
}

export default Navbar