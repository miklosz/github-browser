import React from 'react'
import styles from './shared.module.css'

export interface IError {
    title: string
    status: number
    message: string
}

const Error = (props: { error: IError }) => {
    const { title, status, message } = props.error
    return (
        <div className={styles.error}>
            <h2>Error</h2>
            <h3>{title}</h3>
            <p>{status} {message}</p>
        </div>
    )
}

export default Error