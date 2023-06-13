import style from "./style.module.css"

function Item(props){
    return(
        <div className={style.main}>
            <div className={style.left}>
                <img src={props.img}/>
            </div>
            <div className={style.right}>
                <p className={style.number}>{props.num}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Item