import React from 'react'
import style from "./style.css"
import logo from "./logo.png"
import subtract from "./Subtract.png"
import telephone from "./telephone.png"
const Top = () => {
  // telNum ="7 (495) 744 65 99"
  return (
    <div className="main">
      <div className="left">
        <img src={logo} alt="Not fount" className="logo" />
      </div>
      <div className="right">
        <div className='right-element'>
          <div className="addres">
            <img src={subtract} alt="Not fount" />
            <small>Сочи, ул.Кольцова 17</small>
          </div>
          <div className="telephoneNumber">
            <img src={telephone} />
            <small>7 (495) 744 65 99</small>
          </div>
          <div>
            <button className="telBtn">Заказать звонок</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Top