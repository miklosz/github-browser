import React from 'react'
import UserImage from './UserImage'

const UserView = props => {
    const { login, id, avatar_url } = props.user
    return(
        <div>
            <UserImage imageUrl={avatar_url} imageAlt={`${login}'s avatar`} />
            <h1>{ login }</h1>
            
        </div>
    )    
}

  
export default UserView