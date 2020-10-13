import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ListUser from './ListUser'
import Error from '../shared/Error'
import { getUsers, selectList, fetchUsersList} from './listState';
import { IUser }from '../../models/user.model'


const ListView = ( props ) => {
    const { users, pagination, loading, errors } = useSelector(selectList)
    // const state = useSelector(selectList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsersList())
    }, [dispatch])


    return (
        <>  
        {/* <Error error={{ title: 'Hardcoded', status: 666, message: 'okay, that failed'}} /> */}
            <h1>Github users browser</h1>
            <ul>
                {/* fix type casting */}
                { users && users.map((user : any) =>
                    <ListUser user={user} key={user.id}/>
                )}
            </ul>
        </>
    )
}
  
export default ListView