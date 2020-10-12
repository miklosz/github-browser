import React from 'react'
import ListUser from './ListUser'


const ListView = ( props ) => {
    const { users } = props
    return (
        <>
            <h1>Github users browser</h1>
            <ul>
                { users.map(user =>
                    <ListUser user={user} key={user.id} />
                )}
            </ul>
        </>
    )
}
  
export default ListView