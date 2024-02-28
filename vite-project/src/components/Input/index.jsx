import { forwardRef } from "react"
import styles from "../Input/input.module.scss"

const Input = forwardRef(({ label, type, placeholder, ...rest }, ref ) => {
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <input ref={ref} type={type} placeholder={placeholder} {...rest}/>
        </div>
    )
})

export default Input