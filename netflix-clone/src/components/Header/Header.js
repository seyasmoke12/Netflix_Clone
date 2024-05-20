import React from 'react';
import './header.css';
import Netflix from '../../assets/images/netflix-logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Header = () => {
    return (
        <div className='header-container-outer'>
            <div className='header-container'>
                <div className='left-container'>
                <ul>
    <li><img src={Netflix} alt="Netflix logo" width="100" /></li>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>My List</li>
                       <li>Browse by Languages</li>
                    </ul>
         </div>
                <div className='header-right'>
                    <ul>
                        <li><SearchIcon /></li>
                        <li><AddAlertIcon /></li>
                  <li><AccountCircleIcon /></li>
                        <li><ArrowDropDownCircleIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

