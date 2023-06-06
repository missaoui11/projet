import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='footer'>
      <div className='flexfooter'>
      <div className='partfooter'>
        <h4>COLUMN 1</h4>
        <ul>
          <li>no idea</li>
          <li>no idea</li>
          <li>no idea</li>
          <li>no idea</li>
        </ul>

      </div>
      <div className='partfooter'>
         <h4>COLUMN 2</h4>
        <ul>
          <li>no idea</li>
          <li>no idea</li>
          <li>no idea</li>
          <li>no idea</li>
        </ul></div> 
    <div className='partfooter3'>
     
    
    <SocialIcon url="https://twitter.com/jaketrent" />
    <SocialIcon url="https://www.facebook.com/profile.php?id=100004540508236&sk=friends_mutual" />
    <SocialIcon url="https://linkedin.com/jaketrent" />
    <SocialIcon url="https://telegram.com/jaketrent" />
    <SocialIcon url="https://instagram.com/jaketrent" />
    
    </div>
    </div>
    <hr />
    <div className='lastfooter'>
     <p>
      &copy;{new Date().getFullYear()} LAWYER|  Developed by Ahmed Missaoui |
    </p> 
    </div>
    </div>
  )
}

export default Footer

