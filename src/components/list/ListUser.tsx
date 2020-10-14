import React from 'react'
import UserImage from '../shared/UserImage'
import { IUser }from '../../models/user.model'
import styles from './List.module.css'

const ListUser = ( props : { user: IUser }  ) => {
    const { user } = props
    return (
        <li className={styles.listEntry}>
            <a href={`/user/${user.login}`} >
                <UserImage imageUrl={user.avatar_url} imageAlt={`${user.login}'s avatar`} />
                <div>
                    <h2>{ user.login }</h2>
                    <p>Additional info about user can be displayed here</p>
                </div>
            </a>
        </li>
    )
}
    
  
export default ListUser