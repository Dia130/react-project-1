import React from 'react'
import style from "./style.module.css"
import Item from './Item'
import emails from "./emails.png"
import likes from "./likes.png"
import emoji from "./emoji.png"
import union from "./Union.png"
const Bottom = () => {
  return (
    <div className={style.main}>
        <Item img={emoji} num="1 295 +" desc="Отдохнуло детей в прошлом сезоне" />
        <Item img={emails} num="7 500" desc="Стоимость трансфера в обе стороны"/>
        <Item img={union} num="14 дней" desc="Длительность смены"/>
        <Item img={likes} num="97%" desc="Рекомендуют нас"/>
    </div>
  )
}

export default Bottom