import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import UserImage from '../shared/UserImage'
import { IUser } from '../../models/user.model'
import { fetchSingleUser, selectUser } from './userState';


const UserView = props => {
    const { data, loading, errors } = useSelector(selectUser)
    const { login, id, avatar_url } = data
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleUser('mojombo'))
    }, [dispatch])

    return (
        <div>
            <h1>{login}</h1>
            { errors ?
                'Some errors'
                :
                <UserImage imageUrl={avatar_url} imageAlt={`${login}'s avatar`} />
            }
        </div>
    )
}

export default UserView
