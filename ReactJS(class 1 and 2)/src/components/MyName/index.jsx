import React from 'react'
import styles from './myName.module.css'
export const MyName = (props) => {
    return (
        <>
            <h1 className={`${styles.heading} heading_size p-5`}>{props.name}</h1>
            <p>{props.age}</p>
        </>
    )
}
