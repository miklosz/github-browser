import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom"
import ListUser from './ListUser'
import Error from '../shared/Error'
import Loader from '../shared/Loader'
import { selectList, fetchUsersList } from './listState';
import { IUser } from '../../models/user.model'
import styles from './List.module.css'


const ListView = () => {
    // console.log(useSelector(selectList))
    const { users, loading, error, currentPage } = useSelector(selectList)
    // const { page: paramLogin } : { page?: string | undefined } = useParams();
    // const { page } : { page?: string | undefined }= useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchUsersList(currentPage))
        dispatch(fetchUsersList())
    }, [dispatch])

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 0 ) dispatch(fetchUsersList(pageNumber))
    }

    const nextPage = () => dispatch(fetchUsersList(currentPage + 1))
    const prevPage = () => {
        if (currentPage > 0) dispatch(fetchUsersList(currentPage -1))
    }
    

    return (
        <div className={styles.container}>
            <h1>Browse GitHub users</h1>
            { loading ?
                <Loader />
                : error ?
                    <Error error={error} />
                    :
                    <>
                    <nav style={{ display: "flex" , justifyContent: "space-between"  }}>
                        {currentPage > 0 &&
                            <a href="#" className="btn" onClick={prevPage}>&laquo; Previous</a>
                        }
                        <a href="#" className="btn" onClick={nextPage}>Next &raquo;</a>
                    </nav>
                    <ul>
                        {users && users.map((user: IUser) =>
                            <ListUser user={user} key={user.id} />
                        )}
                    </ul>
                    </>


            }
        </div>
    )
}

export default ListView