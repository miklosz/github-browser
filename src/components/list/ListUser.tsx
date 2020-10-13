import React from 'react'
import UserImage from '../shared/UserImage'
import { IUser }from '../../models/user.model'

const ListUser = ( props : { user: IUser }  ) => {
    const { user } = props
    return (
        <li>
            <a href={`/user/${user.login}`} >
                <UserImage imageUrl={user.avatar_url} imageAlt={`${user.login}'s avatar`} />
                <h2>{ user.login }</h2>
                <p>Additional info about user can be displayed here</p>
            </a>
        </li>
    )
}
    
  
export default ListUser