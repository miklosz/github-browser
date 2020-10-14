import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ListUser from './ListUser'
import Error from '../shared/Error'
import Loader from '../shared/Loader'
import { selectList, fetchUsersList } from './listState';
import { IUser } from '../../models/user.model'
import styles from './List.module.css'


const ListView = () => {
    const { users, pagination, loading, error } = useSelector(selectList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersList())
    }, [dispatch])


    return (
        <div className={styles.container}>
            <h1>Browse GitHub users</h1>
            { loading ?
                <Loader />
                : error ?
                    <Error error={error} />
                    :
                    <ul>
                        {users && users.map((user: IUser) =>
                            <ListUser user={user} key={user.id} />
                        )}
                    </ul>

            }
        </div>
    )
}

export default ListView