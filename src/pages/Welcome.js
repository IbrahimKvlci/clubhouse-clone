import React from 'react'
import style from '../style/welcome.module.css'
import { Link } from 'react-router-dom'


export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          We're working hard to get clubhouse ready for everyone! While we wrap up the finishing touches,we'ew adding people gradually to make sure nothing breaks
        </p>
        <p>
        We’re glad you’re here. These Terms of Service ("Terms") govern our relationship with you as a user of Clubhouse’s products and services, including our iOS and Android apps and our website (together, we refer to these as our "Products"). By using our Products, you agree to be bound by these Terms and acknowledge that you have read our Privacy Policy. You also confirm that you have read and agree to our Community Guidelines.
        </p>
        <p>
          Paul, Rohan & the Clubhouse team
        </p>
      </div>
      <div className={style.actionBtn}>
        <Link exact to='/get_username' className='primeryBtn d-flex align-items-center mb-3'>
          Get your username {' '}
          {/* <img/> */}
        </Link>
        <Link>
          Have an invite text? Sign in
        </Link>
      </div>
    </div>
  )
}
