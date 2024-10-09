import React from 'react'

import { Icon } from '@iconify/react';

import "./Menu.css"
import "../index.css"

import menuImg from "../assets/Menu/menuImg.png"
import dosa from "../assets/Menu/dosa.png"

import menuData from "../data/menu"

function Menu() {
  const menuItems = menuData.map((items) => {
    return (
      <div className="menu--item horizontal--flex center" key={items.id}>
        <p className="item--name">{items.itemName}</p>
        <p className="item--price">{items.price}</p>
      </div>
    )
  })

  return (
    <>
        <div className="menu--container horizontal--flex">
            <aside className="menu--sidebar vertical--flex">
              <div className="menu--image--container horizontal--flex center">
                <p className='cursive'>Menu</p>
                <img src={menuImg} alt="menu" className='menu'/>
              </div>
            </aside>

            <div className="menu--display--container horizontal--flex">
              <div className="menu--list--container vertical--flex">
                <p className="menu--list--heading">Item List</p>
                {menuItems}
              </div>

              <div className="menu--item--description--container">
                <p className="description--header">Description</p>
                <div className="menu--description vertical--flex">
                  <img src={dosa} alt="dosa" />
                  <p>Crispy and fluffy lentil doughnuts, seasoned with spices and
                  deep-fried to golden perfection.
                  </p>
                  <a href="#" className='custom--button horizontal--flex'>
                    <div className="custom--button--logo horizontal--flex center">
                      <Icon icon="mdi:delivery-dining-electric-outline" width="32" height="32" />
                    </div>
                    <p className='button--text'>Order Online!</p>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Menu