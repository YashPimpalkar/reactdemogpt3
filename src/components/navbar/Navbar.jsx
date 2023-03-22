import React,{useState} from 'react';
import {RiMenu3Line,RiCloseLine}from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu =()=>(
  <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#wgpt3'>What is GPT?</a></p>
      <p><a href='#possibility'>Open AI</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
const [toggelemenu,settoggelemenu]=useState(false);
  return (
    <div className='gpt3__navbar'>
     <div className='gpt3__navbar-links'>
       <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" srcset="" />
       </div>
       <div className='gpt3__navbar-links_container'>
           <Menu />
       </div>
     </div>
     <div className='gpt3__navbar-sign'>
      <p>Sign in</p>
      <button type='button'>Sign up</button>
     </div>
     <div className='gpt3__navbar-menu'>
        { toggelemenu
        ?<RiCloseLine color='#fff' size={27} onClick={()=>settoggelemenu(false)}/>
        :<RiMenu3Line color='#fff' size={27} onClick={()=>settoggelemenu(true)}/>
        }
        {
          toggelemenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
             <div className='gpt3__navbar-menu_container-links'>
                 <Menu />
                 <div className='gpt3__navbar-menu_container-links-sign'>
                 <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
             </div>
            </div>
          )}
     </div>
    </div>
  )
}

export default Navbar