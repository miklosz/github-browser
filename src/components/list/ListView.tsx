import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ListUser from './ListUser'
import Error from '../shared/Error'
import Loader from '../shared/Loader'
import { selectList, fetchUsersList } from './listState';
import { IUser } from '../../models/user.model'
import styles from './List.module.css'

const ListView = () => {
    const { users, loading, error, currentPage } = useSelector(selectList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersList(currentPage))
    }, [dispatch,currentPage])

    const nextPage = () => 
        dispatch(fetchUsersList(currentPage + 1))

    const prevPage = () => {
        if (currentPage > 0) dispatch(fetchUsersList(currentPage -1))
    }

    return (
        <div className={styles.listView}>
            <h1 className={styles.heading}>Browse GitHub users</h1>
            { loading ?
                <Loader />
                : error ?
                    <Error error={error} />
                    :
                    <>
                        <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />
                        <ul>
                            {users && users.map((user: IUser) =>
                                <ListUser user={user} key={user.id} />
                            )}
                        </ul>
                        <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} />
                    </>
            }
        </div>
    )
}

interface IPaginationProps {
    currentPage: number,
    prevPage: any,
    nextPage: any
}

const Pagination = ( props : IPaginationProps ) => {
    const { currentPage, prevPage, nextPage } = props
    return (
        <nav className={styles.nav}>
            
            {currentPage > 0 &&
                <button className={`${styles.prev} btn`} onClick={prevPage}>&laquo; Previous</button>
            }
            <button className={`${styles.next} btn`} onClick={nextPage}>Next &raquo;</button>
        </nav>

    )
}

export default ListView