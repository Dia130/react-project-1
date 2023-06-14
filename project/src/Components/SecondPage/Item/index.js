import style from "./style.module.css"

function Item(props) {
    return (
        <div className={style.main}>
            <div className={style.name}>
                <p className={style.pName}>
                    {props.name}
                </p>
            </div>
            <div className={style.desc}>
                <p className={style.pDesc}>
                    {props.desc}
                </p>
            </div>
        </div>
    )

}

export default Item