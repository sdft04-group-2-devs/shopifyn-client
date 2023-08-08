import React from 'react'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links-div'>
                    <h4>For Business </h4>
                    <a href="/employer">
                        <p>Employer</p>
                    
                    </a>
                    <a href="/healthplan">
                        <p>Health Plan</p>
                    </a>
                    <a href="/individual">
                        <p>Individual</p>
                    </a>   
                </div> 
                <div className='sb__footer-links-div'>
                    <h4>Resources </h4>
                    <a href="/resouce">
                        <p>Resource Center</p>
                    </a>
                    <a href="/resource">
                        <p>Testimonials</p>
                    </a>
                    <a href="/resource">
                        <p>STV</p>
                    </a>   
                </div>
                <div className='sb__footer-links-div'>
                    <h4>Partners</h4>
                    <a href="/employer">
                        <p>Swing Tech</p>
                    </a>
                </div>
                <div className='sb__footer-links-div'>
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>Career</p>
                    </a>   
                    <a href="/contact">
                        <p>Contact</p>
                    </a>   
                </div>
                <div className='sb__footer-links-div'>
                    <h4>Follow us on</h4>
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                    
                </div>



            </div>

        </div>
        
    </div>
  )
}

export default Footer