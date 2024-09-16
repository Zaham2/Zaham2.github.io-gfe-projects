import React from 'react'
import ProfilePic from '../assets/img/profile.png'
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const ProfileCard = () => {
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-content'>
                    <img src={ProfilePic} alt='Profile Pic' />
                    <h1 className='name'>Sarah Dole</h1>
                    <h2 className='title'>Frontend Engineer @ Microsoft</h2>
                    <p className="text">I turn coffee into bugs which are fixed by someone else. Certified
                        Stack Overflow and ChatGPT developer.</p>
                    <button className='btn'>Contact me</button>
                    <div className='social-icons'>
                        {/* <a href='#'><FaGithub /></a> */}
                        <a href='#' ><FaGithub /></a>
                        <a href='#' ><FaLinkedin /></a>
                        <a href='#' ><AiFillInstagram /></a>
                        <a href='#' ><FaXTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard