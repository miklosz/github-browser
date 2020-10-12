import React from 'react'
import UserImage from '../user/UserImage'

const ListUser = props => {
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