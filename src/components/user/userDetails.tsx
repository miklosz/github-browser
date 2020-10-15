import React from 'react'
import { Link } from "react-router-dom"
import UserImage from '../shared/UserImage'
import { IUser } from '../../models/user.model';
import styles from './user.module.css'

const UserDetails = (props: { data: IUser }) => {
    const {
        name,
        login,
        avatar_url,
        location,
        html_url,
        followers,
        following,

    } = props.data

    return (
        <header className={styles.header}>
            
            <Link to="/" className={`btn btn-back ${styles.back}`}>Go back to list</Link>
            <a 
                className={`btn btn-alt ${styles.gh}`}
                href={html_url}
                title="Go to github.com to view full profile" 
                target="_blank"
                rel="noopener noreferrer"
                >
                Full profile on GitHub
            </a>
            
            <UserImage imageUrl={avatar_url} imageAlt={`${login}'s avatar`} />
            <div>
                <h1 title="Name">{name}</h1>
                <h2 title="Username">{login}</h2>
                {location &&
                    <p>Location: {location}</p>
                }
                <p>
                    Followers: {followers} &middot; Following: {following}
                </p>
            </div>
        </header>
    )
}

export default UserDetails