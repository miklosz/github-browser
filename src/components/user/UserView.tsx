import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import UserImage from '../shared/UserImage'
import Error from '../shared/Error'
import Loader from '../shared/Loader'

import { fetchSingleUser, selectUser } from './userState';

/* TODO 
    verify if paramLogin === login (some edge-case scenario, like store not being reloaded properly )
*/

const UserView = () => {
    const { login: paramLogin } = useParams();
    const { data, loading, error } = useSelector(selectUser)
    const { id, name, login, avatar_url } = data
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleUser(paramLogin))
    }, [dispatch,paramLogin])

    return (
        <div>
            { loading ?
                <Loader />
                : error ?
                    <Error error={error} />
                    :
                    <>
                        <h1>{name}</h1>
                        <h2>{login} ({id})</h2>
                        <UserImage imageUrl={avatar_url} imageAlt={`${login}'s avatar`} />
                    </>
            }
        </div>
    )
}

export default UserView
