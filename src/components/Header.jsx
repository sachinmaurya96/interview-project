import React, { useState } from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaAngleDown,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [toggle,setToggle] = useState(false)
    const [border,setBorder] = useState(false)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
          setBorder(true)
        } else {
         setBorder(false)
        }
      });
      
  return (
    <>
      <Menu className={`${border && "border"}`}>
        <div className="container">
          <div className="logo">
            <img
              src="https://www.mscorpres.com/assets/images/mscorpres_logo.png"
              alt="logo"
            />
          </div>
          <div className="links">
            <a href="#">home</a>
            <a href="#">About</a>
            <a href="#">blog</a>
            <a href="#">services</a>
            <a href="#">contact</a>
          </div>
          <div className="auth">
            <button>
              cms login <FaAngleDown />
              <div className="dropdown">
                <a href="#">Ess portal</a>
                <a href="#">ims server 1</a>
                <a href="#">ims server 2</a>
                <a href="#">hr tos </a>
                <a href="#">hr aerm</a>
            </div>
            </button>
           
          </div>
          <div className="social">
            <a href="#" className="twitter">
              <FaTwitter size={25} />
            </a>
            <a href="#" className="facebook">
              <FaFacebook size={25} />
            </a>
            <a href="#" className="linkedin">
              <FaLinkedin size={25} />
            </a>
            <a href="#" className="youtube">
              <FaYoutube size={25} />
            </a>
          </div>
          <div className="menu_icon">
            <FiMenu size={25} onClick={()=>setToggle(true)}/>
          </div>
        </div>
      </Menu>
      <PopupMenu className={`${toggle?"show":""}`}>
        <div className="menubar">
            <RxCross2 className="cross" onClick={()=>setToggle(false)}/>
          <div className="links">
            <a href="#">home</a>
            <a href="#">About</a>
            <a href="#">blog</a>
            <a href="#">services</a>
            <a href="#">contact</a>
          </div>
          <div className="auth">
            <button>
              cms login <FaAngleDown />
            </button>
          </div>
        </div>
      </PopupMenu>
    </>
  );
};
const Menu = styled.nav`
  padding: 10px 0;
 
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
  &.border{
    border-bottom: 1px solid lightgray;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo img {
      max-height: 50px;
      min-height: 20px;
    }
    .links {
      display: flex;
      align-items: center;
      gap: 20px;
      a {
        text-transform: uppercase;
      }
    }
    .auth {
      button {
        position: relative;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 8px;
        height: 40px;
        border: none;
        background-color: #488aec;
        color: white;
        padding: 15px;
        /* box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.625px #00000026,
          0 1.8065619053231785px 1.8065619053231785px -1.25px #00000025,
          0 3.6217592146567767px 3.6217592146567767px -1.875px #00000023,
          0 6.8655999097303715px 6.8655999097303715px -2.5px #00000020,
          0 13.646761411524492px 13.646761411524492px -3.125px #0000001b,
          0 30px 30px -3.75px #0000000d; */
        font-weight: bold;
        font-family: Montserrat;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: 150ms ease-in-out;
      }

      button:active {
        scale: 0.95;
        background: #fff;
        color: black;
        box-shadow: rgba(0, 0, 0, 0.26) 0px 0.637473px 1.14745px -1.125px,
          rgba(0, 0, 0, 0.24) 0px 1.93094px 3.4757px -2.25px,
          rgba(0, 0, 0, 0.192) 0px 5.10423px 9.18761px -3.375px,
          rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px;
      }
      
      .dropdown{
        position: absolute;
        z-index: 3;
        background-color: #fff;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 200px;
        border: 1px solid lightgray;
        top: 40px;
        left: 0;
        text-transform: capitalize;
        transition:0.3s;
       display: none;
       color: black;
       text-align: left;
       font-weight: 400;
       font-size: 15px;
      }
      button:hover .dropdown{
        display: flex;
        transition: 0.3s;
      }
    }
    .social {
      display: flex;
      align-items: center;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        color: #fff;
      }
      .twitter {
        background-color: #0f9afb;
      }
      .facebook {
        background-color: #0d6efd;
      }
      .linkedin {
        background-color: #0a66c2;
      }
      .youtube {
        background-color: #ff0101;
      }
    }
    .menu_icon {
      display: none;
    }
  }
  @media only screen and (max-width: 1176px) {
    .container {
      .links,
      .auth,
      .social {
        display: none;
      }
      .menu_icon {
        display: block;
      }
    }
  }
`;
const PopupMenu = styled.div`
height: 100%;
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 5;
background-color: rgba(0,0,0,0.7);
padding: 50px;
transition: 0.3s;
display: none;
&.show{
    display: block;
    transition: 0.3s;
}
.menubar{
    height: 100%;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
    position: relative;
    .auth {
      button {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 8px;
        height: 40px;
        border: none;
        background-color: #488aec;
        color: white;
        padding: 15px;
        box-shadow: 0 0.7065919983928324px 0.7065919983928324px -0.625px #00000026,
          0 1.8065619053231785px 1.8065619053231785px -1.25px #00000025,
          0 3.6217592146567767px 3.6217592146567767px -1.875px #00000023,
          0 6.8655999097303715px 6.8655999097303715px -2.5px #00000020,
          0 13.646761411524492px 13.646761411524492px -3.125px #0000001b,
          0 30px 30px -3.75px #0000000d;
        font-weight: bold;
        font-family: Montserrat;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 150ms ease-in-out;
        width: 100%;
        text-align: center;
      }

      button:active {
        scale: 0.95;
        background: #fff;
        color: black;
        box-shadow: rgba(0, 0, 0, 0.26) 0px 0.637473px 1.14745px -1.125px,
          rgba(0, 0, 0, 0.24) 0px 1.93094px 3.4757px -2.25px,
          rgba(0, 0, 0, 0.192) 0px 5.10423px 9.18761px -3.375px,
          rgba(0, 0, 0, 0.03) 0px 16px 28.8px -4.5px;
      }
    }
    .cross{
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 30px;
        text-transform: uppercase;
    }
}
@media only screen and (max-width: 600px){
    padding: 20px;
}
`;
export default Header;
