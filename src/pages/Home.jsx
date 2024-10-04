import React from 'react'
import { Icon } from '@iconify/react';

import "./Home.css"
import "../index.css"

import IndianFood from "../assets/indian.gif"

function Home() {
  return (
    <>
        <div className='home--container main--container'>
          <div className="home--carousel--top horizontal--flex center">
            <p><span className='bold red italic'>Tagline</span> inga vanthurum bro... Enna vekkirathu nu therla</p>
          </div>
          
          <div className="home--carousel--middle">
            <p className="tasteofmadras--text cursive">TasteofMadras</p>
            
            <div className="carousel--top--details horizontal--flex center">
              <div className="copyright--carousel horizontal--flex center">
                <Icon icon="ph:copyright-light" width="32" height="32" className='icon'/>
                <p>2024 / TasteofMadras</p>
              </div>

              <div className="since--carousel horizontal--flex center">
                <Icon icon="et:calendar" width="32" height="32" className='icon'/>
                <p>SINCE / 1969</p>
              </div>

              <div className="location--carousel horizontal--flex center">
                <Icon icon="fa-solid:globe" width="32" height="32" className='icon'/>
                <p>CANADA | INDIA</p>
              </div>
            </div>

            <img src={IndianFood} className='indian--food--gif' alt='tasteofmadras.gif'></img>

            <div className="carousel--bottom--details horizonal--flex center">
              <a href="#" className='custom--button horizontal--flex'>
                <div className="custom--button--logo horizontal--flex center">
                  <Icon icon="mdi:delivery-dining-electric-outline" width="32" height="32" />
                </div>
                <p className='button--text'>Order Online!</p>
              </a>
              
              <a href="#" className='custom--button horizontal--flex'>
                <div className="custom--button--logo horizontal--flex center">
                <Icon icon="hugeicons:table-03" width="32" height="32" />
                </div>
                <p className='button--text'>Book a Table</p>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home