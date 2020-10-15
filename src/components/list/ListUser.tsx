import React from 'react'
import { Link } from "react-router-dom"
import UserImage from '../shared/UserImage'
import { IUser }from '../../models/user.model'
import styles from './List.module.css'

const ListUser = ( props : { user: IUser }  ) => {
    const { user } = props
    const { avatar_url, login } = user
    return (
        <li className={styles.listEntry}>
            <Link to={`/user/${login}`} >
                <UserImage imageUrl={avatar_url} imageAlt={`${login}'s avatar`} />
                <div>
                    <h2>{ user.login }</h2>
                </div>
            </Link>
        </li>
    )
}
    
  
export default ListUser