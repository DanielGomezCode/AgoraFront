import React from 'react'
import Styles from '../components/header.module.css'
import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <div>
        <header>
            <div>
                <img src={logo} className={Styles.logo} alt=""/>
            </div>
            <div className={Styles.icon}>
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </header>
    </div>
  )
}
