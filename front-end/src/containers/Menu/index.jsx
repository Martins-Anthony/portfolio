import React, { useState } from 'react'
import DeleteProject from '../Forms/DeleteProject'
import FormProject from '../Forms/FormProject'
import PutProject from '../Forms/PutProject'

function Menu() {
  const [activeMenu, setActiveMenu] = useState('')

  const handleMenuClick = (menu) => {
    setActiveMenu(menu)
  }

  return (
    <div className="navbar">
      <button className="btn submit-style" onClick={() => handleMenuClick('menu1')}>
        Add project
      </button>
      <button className="submit-style btn" onClick={() => handleMenuClick('menu2')}>
        Edit project
      </button>
      <button className="submit-style btn" onClick={() => handleMenuClick('menu3')}>
        Delete project
      </button>

      {activeMenu === 'menu1' && <FormProject legend="Add project" method="POST" />}
      {activeMenu === 'menu2' && <PutProject />}
      {activeMenu === 'menu3' && <DeleteProject />}
    </div>
  )
}

export default Menu
