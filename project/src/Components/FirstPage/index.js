import React from 'react'
import style from './style.module.css'
import Top from './Top'
import Content from './Content'
import Bottom from "./Bottom"
const FirstPage = () => {
  return (
    <div className={style.main} style={{
      backgroundImage: "url(/main.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative",
    }}>
      <div className={style.items}>
        <section>
          <Top />
        </section>
        <section>
          <Content />
        </section>
        <section>
          <Bottom />
        </section>
      </div>
    </div>
  )
}

export default FirstPage