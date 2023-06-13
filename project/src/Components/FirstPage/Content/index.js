import React from 'react'
import style from "./style.module.css"
import play from "./play.png"
import vector from "./vector.png"
const Content = () => {
    // let pStyle = {
    //     color:"#fff",
    //     fontStyle:"normal",
    //     fontWeight:600,
    //     fontSize:"42px",
    //     lineHeight:"51px",
    //     }

    // let descStyle = {
    //     fontFamily: 'Montserrat',
    //     fontStyle: "normal",
    //     fontWeight: 600,
    //     fontSize: "18px",
    //     lineHeight: "28px",
    //     color:"#fff",
    // }
    return (
        <div className={style.main}>
            <div className={style.name}>
                <p>Детский <span style={{ color: "#E6A922" }}>оздоровительный</span> лагерь</p>
            </div>
            <div className={style.description}>
                <p>Современный детский оздоровительный лагерь со своей SPA-программой, специально разработанной для детей от 7 до 16 лет</p>
            </div>
            <div className={style.buttons}>
                <div className={style.buttonDiv}>
                    <button className={style.button}>В путешествие <img src={vector} /></button>
                </div>
                <div className={style.playerDiv}>
                    <img src={play} /> <a href='#'>Смотреть видео</a>
                </div>
            </div>
        </div>
    )
}

export default Content