import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillFileAdd, AiOutlineHome } from "react-icons/ai";

const NavItem = ({to,value,Icon})=>{
const commonClasses = 'flex items-center space-x-2 w-full p-3 block text-sm'
const activeClass=commonClasses+ ' bg-blue-400 text-white'
const inActiveClass=commonClasses+ ' text-gray-500'

    return(
    <NavLink className={({isActive})=>isActive?activeClass:inActiveClass} to={to}>{Icon} <span>{value}</span></NavLink>)}

function Navbar(props) {
    return (
        <nav>
            <div className='flex justify-center '>
                <img className='w-24' src='./logo.png' alt=''/>
            </div>
            <ul>
                <li>
                    <NavItem to='/' value='Home' Icon={<AiOutlineHome size={18}/>}/>
                </li>
                <li>
                <NavItem to='/create-post' value='Create Post' Icon={<AiFillFileAdd size={18}/>}/>
                    </li>
            </ul>
        </nav>
    );
}

export default Navbar;