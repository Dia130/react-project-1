import React from 'react'
import style from './style.module.css'
import Top from './Top'
import Content from './Content'
const FirstPage = () => {
  return (
    <div className={style.main} style={{
        backgroundImage:"url(/main.png)",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
    }}>
      <section>
        <Top/>
      </section>
      <section>
        <Content/>
      </section>
    </div>
  )
}

export default FirstPage