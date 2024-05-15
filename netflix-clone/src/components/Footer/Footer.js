import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'></div>
      <footer className="footer">
        
            <div className="footer-container">
                <div className="footer-links">
                  <div className='footer-icons'>
      </div>
      <div className='icons'>
          <FacebookOutlinedIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
      <div className='row'>

                    <ul>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Ways to Wach</li>
                        <li>Corporate Information</li>
                         <div className="footer-copyright">
                    <p>&copy; 1997-2024 Netflix, Inc.</p>
                </div>
                        </ul>
                        
              <div>
        <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Contact US</li>
        </ul>
      </div>
      <div>
        <ul>
                        <li>Account</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                        <li>Corporate Information</li>
                        </ul>
      </div>
      <div>
        <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Contact US</li>
                        </ul>
      </div>
      </div>
              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer