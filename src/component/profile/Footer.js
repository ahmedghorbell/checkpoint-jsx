import React from 'react'
import './Footer.css'
import { UilGithub,UilFacebookF,UilInstagram,UilLinkedin} from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className='footer-basic'>
<footer>
    <div className='social'>
        <UilFacebookF className='icn' />
        <UilInstagram className='icn' />
        <UilLinkedin className='icn' />
        <UilGithub className='icn' />
    </div>
    <ul className='list-inline'>
        <li className='list-inline-item'>Home</li>
        <li className='list-inline-item'>About</li>
        <li className='list-inline-item'>Terms</li>
        <li className='list-inline-item'>Privacy Policy</li>
    </ul>
    <p className='copyright'>Ahmed Ghorbel © 1998</p>
</footer>
</div>
  )
}

export default Footer

