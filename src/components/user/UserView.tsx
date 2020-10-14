import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import UserDetails from './userDetails'
import UserRepos from './userRepos'
import Error from '../shared/Error'
import Loader from '../shared/Loader'

import { fetchSingleUser, selectUser } from './userState';
import { IUser } from '../../models/user.model';

/* TODO 
    verify if paramLogin === login (some edge-case scenario, like store not being reloaded properly )
*/
interface IParams {
    login: string
}

const UserView = () => {
    const { login: paramLogin }: IParams = useParams();
    const { currentUser: data, loading, error } = useSelector(selectUser)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleUser(paramLogin))
    }, [dispatch, paramLogin])

    return (
        <div>
            { loading ?
                <Loader />
                : 
                <>
                    { error ?
                        <Error error={error} />
                        : 
                        <>
                            <UserDetails data={data} />
                            { (data.public_repos > 0) &&
                                <UserRepos reposUrl={data.repos_url} reposCount={data.public_repos}/>
                            }
                        </>
                    }
                    <Link to="/">Go back to list</Link>
                </>
            }
        </div>
    )
}

export default UserView
